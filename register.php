<?php
    $name = $_POST['name'];
    $age = $_POST['age'];
    $number = $_POST['number'];
    $password = $_POST['password'];

    //database connection
    $conn = new mysqli('localhost','root','','test1');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into student(name,age,number,password) values(?, ?, ?, ?)");
        $stmt->bind_param("siis",$name, $age, $number, $password);
        $stmt->execute();
        echo "Registation Successfully...";
        $stmt->close();
        $conn->close();
    }
?>