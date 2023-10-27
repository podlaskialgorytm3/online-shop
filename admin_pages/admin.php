<?php 
@include '../config.php';
session_start();
if(!isset($_SESSION['user_admin'])){
    header('location:login.php');
 }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php @include '../admin_pages/components/meta.php' ?>
    <title>SKLEP M&D | ADMIN</title>
</head>
<body>
    <?php @include "components/header.php" ?>
    <?php @include '../admin_pages/components/side-panel.php' ?>
    <?php @include '../admin_pages/components/dashboard-admin.php' ?>
</body>
</html>
