<?php 
@include '../config.php';
session_start();
if(!isset($_SESSION['user_worker'])){
    header('location:login.php');
 }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <<?php @include '../worker_pages/components/meta.php' ?>
    <title>Zarządzanie Zamówieniami | SKLEP M&D</title>
</head>
<body>
    <?php @include "components/header.php" ?>
    <?php @include '../worker_pages/components/side-panel.php' ?>
    <?php @include '../worker_pages/components/dashboard-order.php' ?>
</body>
</html>