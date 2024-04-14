<?php 
/*USER CONTROLLER */

    //INCLUDING MODEL AND CONNECTION TO INSERT DATA IN DATABASE
    include "../config/connection.php";
    
    include "../models/user-model.php";

    //GET DATA FROM REQUEST
    $first_name = $_POST ['firstName'];
    $last_name = $_POST ['lastName'];
    $address = $_POST ['address'];
    $city = $_POST ['city'];
    $country = $_POST ['country'];

    try {
        //CALL MODEL FUNCTION AND SEND PARAMS
        $res = create_user($first_name,$last_name,$city,$address,$country);       

        //SET STATUS CODE 
        if ($res == false) {
            http_response_code(500);
        } else{
            http_response_code(201);
        }

    } catch (Exception $th) {
        http_response_code(500);
        echo("Internal Server Errorr");
    }
