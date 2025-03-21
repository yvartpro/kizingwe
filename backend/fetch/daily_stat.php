<?php

include '../conn.php';
$date = isset($_GET['date']) ? $_GET['date'] : date('Y-m-d'); 
try{
  $stmt = $conn->prepare(
    "SELECT * FROM daily_stat where stat_date = :data"
  );
  $stmt->bindParam(':data',$date);
  $stmt->execute();
  $stats = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($stats);
}catch(PDOException $e){
  echo json_encode($e->getMessage());
}
