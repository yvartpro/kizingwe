<?php
require './conn.php'; // Database connection

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data['waiter']) || !isset($data['items']) || empty($data['items'])) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid JSON request']);
    exit;
}

$waiter_id = intval($data['waiter']);
$items = $data['items'];

try {
    $conn->beginTransaction();

    // Calculate total amount
    $total = array_reduce($items, function ($sum, $item) {
        return $sum + ($item['price'] * $item['quantity']);
    }, 0);

    // Create Invoice
    $stmt = $conn->prepare("INSERT INTO invoice (waiter_id, total) VALUES (?, ?)");
    $stmt->execute([$waiter_id, $total]);
    $invoice_id = $conn->lastInsertId();

    // Insert each ordered product & update stock
    foreach ($items as $item) {
        $product_id = intval($item['id']);
        $quantity = intval($item['quantity']);
        $price = floatval($item['price']);

        // Check stock before inserting order
        $stmt = $conn->prepare("SELECT quantity FROM product WHERE id = ?");
        $stmt->execute([$product_id]);
        $stock = $stmt->fetchColumn();

        if ($stock === false) {
            throw new Exception("Product ID $product_id does not exist.");
        }
        if ($stock < $quantity) {
            throw new Exception("Insufficient stock for Product ID $product_id.");
        }

        // Insert into orders table
        $stmt = $conn->prepare("INSERT INTO orders (invoice_id, product_id, quantity, price) VALUES (?, ?, ?, ?)");
        $stmt->execute([$invoice_id, $product_id, $quantity, $price]);

        // Deduct stock (prevent negative values)
        $stmt = $conn->prepare("UPDATE product SET quantity = quantity - ? WHERE id = ? AND quantity >= ?");
        $stmt->execute([$quantity, $product_id, $quantity]);

        if ($stmt->rowCount() === 0) {
            throw new Exception("Not enough stock for Product ID $product_id.");
        }
    }

    $conn->commit();
    echo json_encode(['status' => 'success', 'message' => 'Order placed successfully', 'invoice_id' => $invoice_id]);

} catch (Exception $e) {
    $conn->rollBack();
    echo json_encode(['status' => 'error', 'message' => 'Transaction failed', 'error' => $e->getMessage()]);
}
