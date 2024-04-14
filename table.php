<?php

    // Load database connection and data  
    include "config/connection.php";
    include "models/user-model.php";

    $users = select_user(); // this function is declared in user-model and returns all users

?>
<!DOCTYPE html>
<html>
<head>
    
    <style> 

        div {

            width: 60%;
            margin-left: 20%;
            margin-right: 20%;
            margin-top:100px;

        }

        table {

            border-collapse: collapse;
            width: 100%;

        }

        th, td {

            border: black;
            border-style: solid;
            border-width:1px;
            padding: 20px;
            text-align: left;
        }
        th {

            font-weight: bold;
            background-color: #f2f2f2;
        }
    
    </style>
    
</head>
<body>
<div>
    <table>

        <thead>
            <tr>

                <th>First name</th>
                <th>Last name</th>
                <th>Street/Number</th>
                <th>City</th>
                <th>Country</th>

            </tr>
            

        </thead>
        
        
        <tbody>

           <?php 

            //Writing all users in a table
            foreach ($users as $user) {
                
                echo "<tr>";
                echo "<td>".$user["firstName"]."</td>";
                echo "<td>".$user["lastName"]."</td>";
                echo "<td>".$user["street"]."</td>";
                echo "<td>".$user["city"]."</td>";
                echo "<td>".$user["country"]."</td>";
                echo "</tr>";

            }
                      
           ?>
            
           

        </tbody>



    </table>

        </div>
    
</body>
</html>
