<?php

include './conn.php';
$data = json_decode(file_get_contents("php://input"),true);

$name = $data['name'];
$username = $data['username'];
$phone = $data['phone'];
$password = password_hash($data['password'],PASSWORD_BCRYPT);

try{
  $sql = "INSERT INTO manager (name,username,phone,password) VALUES (:name, :username, :phone, :password)";
  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':name',$name);
  $stmt->bindParam(':username',$username);
  $stmt->bindParam(':phone',$phone);
  $stmt->bindParam(':password',$password);

  if($stmt->execute()){
    echo json_encode(['success'=>true,'msg'=>'Enregistrement avec success.']);
  }else{
    throw new Exception('Erreur d\'enregistrement deu gerant.');
  }
}catch(Exception $e){
  echo json_encode(['sapor'=>$e->getMessage()]);
}
