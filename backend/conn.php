<?php
$host = '127.0.0.1';
$user = 'yves';
$db = 'kizingwe_db';
$pwd = '5200';
$char = 'utf8';

try {
    // Create PDO instance
    $conn = new PDO("mysql:host=$host;dbname=$db;charset=$char", $user, $pwd);
    // Set error mode to exception to handle issues properly
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Output detailed error if connection fails
    echo json_encode(['error' => 'Connection failed: ' . $e->getMessage()]);
    exit();
}
?>
