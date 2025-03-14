<?php
include './../conn.php';

$stmt = $conn->prepare("SELECT * FROM waiter");
$stmt->execute();
$waiters = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($waiters);
