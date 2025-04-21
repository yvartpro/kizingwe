<?php
include './conn.php';
$data = json_decode(file_get_contents("php://input"),true);
$waiter = $data['waiter'];

if($waiter === null) :
  echo json_encode(['error' => 'Invalid JSON', 'json_last_error' => json_last_error_msg()]);
  exit;
endif;

try {
  $conn->beginTransaction();
  if(empty($waiter['name']) || empty($waiter['phone']) ||empty($waiter['address']) || empty($waiter['cni'])):
    throw new Exception('Tous les champs sont requis.');
  endif;

  $sql = "INSERT INTO waiter (name, phone, address, cni) VALUES (:name, :phone, :address, :cni)";
  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':name', $waiter['name']);
  $stmt->bindParam(':phone', $waiter['phone']);
  $stmt->bindParam(':address', $waiter['address']);
  $stmt->bindParam(':cni', $waiter['cni']);
  $stmt->execute();

  $sql = "SELECT * FROM waiter";
  $st = $conn->prepare($sql);
  $st->execute();
  $waiters = $st->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode(["success"=>true, "message"=>"Serveur ajoute.",'waiters'=>$waiters]);

  $conn->commit();

} catch (Exception $e) {
  $conn->rollBack();
  echo json_encode(['message' => $e->getMessage()]);
}
