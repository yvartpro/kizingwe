<?php

include '../conn.php';
try{
  $stmt = $conn->prepare(
    "SELECT * FROM daily_stat"
  );
  $stmt->execute();
  $stats = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($stats);
}catch(PDOException $e){
  echo json_encode($e->getMessage());
}

echo json_encode($conn);
