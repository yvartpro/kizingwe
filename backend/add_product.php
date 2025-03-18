<?php
include './conn.php';

$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

if($data === null) :
  echo json_encode(['error' => 'Invalid JSON', 'received' => $rawData, 'json_last_error' => json_last_error_msg()]);
  exit;
endif;

try {
  if(empty($data['item']['prod_name']) || empty($data['item']['bt_caisse'])):
    throw new Exception('Tous les champs sont requis.');
  endif;

  $conn->beginTransaction();

  $sql = "INSERT INTO product (prod_name, bt_caisse) VALUES (:prod_name, :bt_caisse)";
  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':prod_name', $data['item']['prod_name']);
  $stmt->bindParam(':bt_caisse', $data['item']['bt_caisse']);

  if($stmt->execute()):
    $lastId = $conn->lastInsertId();
    $stmt = $conn->prepare("SELECT * FROM product WHERE id = :id");
    $stmt->bindParam(':id',$lastId);
    if($stmt->execute()):
      $lastProd = $stmt->fetch(PDO::FETCH_ASSOC);
      echo json_encode($lastProd);
    else:
      throw new Exception('Produit non trouve apres ajout.');
    endif;
  else:
    throw new Exception("Ajout échoué");
  endif;

  $conn->commit();
} catch (Exception $e) {
  $conn->rollBack();
  echo json_encode(['error' => $e->getMessage()]);
}
