<?php
include '../conn.php';

$stmt = $conn->prepare("SELECT
  orders.id AS order_id,
  orders.invoice_id,
  orders.quantity,
  orders.price,
  product.prod_name AS prod_name
  FROM orders JOIN product ON
  orders.product_id = product.id
  ORDER BY orders.created_at DESC;
");
$stmt->execute();
if($stmt->rowCount() > 0):
  $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($orders);
else:
  echo json_encode(['error'=>'Pas de factures.']);
endif;
