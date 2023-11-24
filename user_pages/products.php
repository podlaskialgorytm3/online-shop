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
    <div class="search-options">
    <div class="container">
        <input type="text" placeholder="Parametr lub nazwa." id="search" >
        <div class="search"></div>
    </div>
    <select class="category">
        
    </select>
    <div class="price-range-container">
        <input type="number" class="price-input price-from" placeholder="od">
        <span>---</span>
        <input type="number" class="price-input price-to" placeholder="do">
    </div>
    </div>
    <div class="main">
    <?php include '../user_pages/product-container.php'?>
    </div>
</body>
</html>