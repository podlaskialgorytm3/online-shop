<?php 
@include '../config.php';
session_start();
if(!isset($_SESSION['user_worker'])){
    header('location:login.php');
 }
echo "Strona dla pracownika";
echo $_SESSION["user_worker"];
?>