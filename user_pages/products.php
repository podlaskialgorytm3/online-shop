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
    <?php include 'components/meta.php'?>
    <link rel="stylesheet" href="/css/search.css">
    <title>Produkty</title>
</head>
<body>
    <?php include 'components/header.php' ?>
    <div class="container">
        <input type="text" placeholder="Parametr lub nazwa." id="search" >
        <div class="search"></div>
    </div>
    <div class="main">
    <?php include '../user_pages/product-container.php'?>
    </div>
</body>
</html>