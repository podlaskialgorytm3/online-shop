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
    <title>SKLEP M&D | Tworzenie stron</title>
</head>
<body>
    <?php @include "components/header.php" ?>
    <?php @include '../admin_pages/components/side-panel.php' ?>
    <?php @include '../admin_pages/components/dashboard-create-page.php' ?>
</body>
</html>