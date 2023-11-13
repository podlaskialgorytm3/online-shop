<?php 
@include '../config.php';
session_start();
if(!isset($_SESSION['user_name'])){
    header('location:login.php');
 }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include '../user_pages/components/meta.php' ?>
    <title>SKLEP M&D | USER</title>
</head>
<body>
    <?php include '../user_pages/components/header.php'?>
    <?php include '../components/slider.php' ?>
    <?php include '../user_pages/product-container.php'?>
</body>
</html>