<?php

include './conn.php';
$data = json_decode(file_get_contents("php://input"),true);

$username = $data['username'];
$password = $data['password'];

try{
  $sql = "SELECT * FROM  manager WHERE username = :username";
  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':username',$username);
  $stmt->execute();
  $user = $stmt->fetch(PDO::FETCH_ASSOC);
  if($user):
    if(password_verify($password, $user['password'])):
      echo json_encode(['success'=>1, 'message'=>'Connexion avec success.', 'user'=>$user]);
    else:
      throw new Exception('Nom d\'utilisateur ou mot de passe incorrect.');
    endif;
  else:
    throw new Exception('Nom d\'utilisateur ou mot de passe incorrect.');
  endif;
}catch(Exception $e){
  echo json_encode(['sapor'=>$e->getMessage()]);
}
