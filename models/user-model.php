<?php
/*USER MODEL */

// CREATING USER AND RETURN BOOLEAN IF SUCCESSFULL
function create_user($first_name, $last_name, $city, $street, $country){
    global $database;
    
    //WRITING SQL QUERY
    $query = "INSERT INTO users (firstName, lastName, street, city, country) VALUES (:firstName, :lastName, :street, :city, :country)";
    $stmt = $database->prepare($query);

    //BINDING PARAM BEFORE EXECUTE QUERY 
    $stmt->bindParam(':firstName', $first_name);
    $stmt->bindParam(':lastName', $last_name);
    $stmt->bindParam(':street', $street);
    $stmt->bindParam(':city', $city);
    $stmt->bindParam(':country', $country);

   
    $res = $stmt->execute();
    return $res; 
}

// GETING ALL USERS
function select_user(){
    global $database;

    $query = "SELECT * From users";
    $stmt = $database->prepare($query);

    $stmt->execute();
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    return $users;
}


?>