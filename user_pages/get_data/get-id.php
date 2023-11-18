<?php 
@include '../config.php';
session_start();
$id_user = json_decode($_SESSION['user_name']);
echo $id_user;
if(!isset($_SESSION['user_name'])){
    header('location:login.php');
 }
?>