<?php
include '../conn.php';

$stmt = $conn->prepare("SELECT *  FROM invoice ORDER BY created_at DESC;
");
$stmt->execute();
if($stmt->rowCount() > 0):
  $invoices = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($invoices);
else:
  echo json_encode(['error'=>'Pas de factures.']);
endif;