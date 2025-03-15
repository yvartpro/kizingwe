<?php
include '../conn.php';

$stmt = $conn->prepare("SELECT 
  invoice.id AS invoice_id,
  invoice.total,
  invoice.created_at,
  waiter.name AS waiter_name
  FROM invoice
  JOIN waiter ON invoice.waiter_id = waiter.id
  ORDER BY invoice.created_at DESC;
");
$stmt->execute();
if($stmt->rowCount() > 0):
  $invoices = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($invoices);
else:
  echo json_encode(['error'=>'Pas de factures.']);
endif;