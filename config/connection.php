<?php
$database;
$server = "localhost"; 
$user = "root"; 
$pass = ""; 
$database_name = "nikola-test";

try {
    // creating database conection via PDO
    $database = new PDO("mysql:host=$server;dbname=$database_name", $user, $pass);
    
    $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {
    echo "Error with connection to database: " . $e->getMessage();
}

?>