<?php 
@include '../config.php';
session_start();
$id_user = $_SESSION['user_name'];
if(!isset($_SESSION['user_name'])){
    header('location:login.php');
 }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include '../user_pages/components/meta.php' ?>
    <title>Moje Konto | USER</title>
</head>
<body>
    <?php include '../user_pages/components/header.php' ?>
    <?php include '../user_pages/components/side-panel.php' ?>
    <?php include '../user_pages/components/main-dashboard.php' ?>
</body>
</html>