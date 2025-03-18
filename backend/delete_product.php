<?php

include './conn.php';
$data = json_decode(file_get_contents("php://input"),true);

if(empty($data['id'])):
	echo json_encode('Ce produit n\'existe pas');
  exit();
endif;

try{

	$id = intval($data['id']);
	$sql = "DELETE FROM product WHERE id = :id";
	$stmt = $conn->prepare($sql);
	$stmt->bindParam(':id', $id);
	if($stmt->execute()):
		echo json_encode('Article supprime avec succes.');
	else:
		throw new Exception('Suppression echouee.');
	endif;
}catch(PDOException $e){
	echo json_encode($e->getMessage());
}