<?php

include './conn.php';
try{
  $data = json_decode(file_get_contents("php://input"),true);
  $modified = $data['modified'];
  $row = $data['new_row'];

  if($modified === 'quantity'):
    $sql = "UPDATE product SET $modified = quantity + :val, plus = plus + :val WHERE id = :id";
  else:
    $sql = "UPDATE product SET $modified = :val WHERE id = :id";
  endif;

  $stmt = $conn->prepare($sql);
  $stmt->bindParam(":val", $row[$modified]);
  $stmt->bindParam(":id", $row['id']);
  if($stmt->execute()):
    echo json_encode('Mise a jour a success');
  else:
    echo json_encode("Mise a jour echouee");
  endif;
}catch(PDOException $e){
  echo json_encode($e->getMessage());
}
