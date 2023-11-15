<?php 
@include '../config.php';
session_start();
$id_user = json_decode($_SESSION['user_name']);
if(!isset($_SESSION['user_name'])){
    header('location:login.php');
 }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include '../user_pages/components/meta.php' ?>
    <title>Historia zamówień | USER</title>
</head>
<body>
    <?php include '../user_pages/components/header.php' ?>
    <?php include '../user_pages/components/side-panel.php' ?>
    <?php include '../user_pages/components/order-dashboard.php' ?>
</body>
</html>