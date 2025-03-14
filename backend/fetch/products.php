<?php
header("Access-Control-Allow-Origin: *");
include './../conn.php';

$stmt = $conn->prepare("SELECT * FROM product");
$stmt->execute();
$products = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($products);
