<?php
include '../conn.php';

$stmt = $conn->prepare("SELECT * FROM orders ORDER BY created_at DESC;");
$stmt->execute();
if($stmt->rowCount() > 0):
  $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($orders);
else:
  echo json_encode(['error'=>'Pas de factures.']);
endif;
