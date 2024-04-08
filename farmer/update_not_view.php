<?php
session_start();
require('../sql.php');
$id = $_POST['id'];

$res=mysqli_query($conn,"UPDATE forecast SET view = '1' WHERE id = '$id'");

if($res){
    echo '1';
} else {
    echo '0';
}