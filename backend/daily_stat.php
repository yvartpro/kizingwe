<?php

include './conn.php';

try{

  $conn->beginTransaction();
  $select_stmt = $conn->prepare("SELECT * FROM product");
  $select_stmt->execute();
  $products = $select_stmt->fetchAll(PDO::FETCH_ASSOC);

  foreach( $products as $item ){
    $prod_id = $item['id'];
    $prod_name = $item['prod_name'];
    $final = $item['quantity'] ?? 0;
    $plus = $item['plus'] ?? 0;
    $minus = $item['minus'] ?? 0;
    $initial = $final - ($plus - $minus);
    $price = $item['price'];
    $pau = $item['pau'];

    $stmt = $conn->prepare(
      "INSERT INTO daily_stat
      (product_id, prod_name, initial, final, plus, minus, price, pau)
      VALUES (:prod_id, :prod_name, :initial, :final, :plus, :minus, :price, :pau)"
    );
    $stmt->bindParam(':prod_id',$prod_id);
    $stmt->bindParam(':prod_name',$prod_name);
    $stmt->bindParam(':initial',$initial);
    $stmt->bindParam(':final',$final);
    $stmt->bindParam(':plus',$plus);
    $stmt->bindParam(':minus',$minus);
    $stmt->bindParam(':price',$price);
    $stmt->bindParam(':pau',$pau);
    $stmt->execute();
  }
  //reset the products sate for plus and minus
  $stmt = $conn->prepare("UPDATE product SET plus = 0, minus = 0");
  $stmt->execute();
  $conn->commit();
  
  echo json_encode('Success');

}catch(PDOException $e){
  $conn->rollBack();
  echo json_encode(['error'=>true, 'sapor'=>$e->getMessage(), 'code'=>$e->getCode()]);
}
