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
    <?php include '../components/meta.php' ?>
    <?php @include '../admin_pages/components/meta.php' ?>
    <title>SKLEP M&D | ADMIN</title>
</head>
<body>
    <?php @include "components/header.php" ?>
    <?php @include '../admin_pages/components/side-panel.php' ?>
    <h1>STRONA DLA ADMINISTRATORA</h1>
    <h3>Witaj <?php echo $_SESSION['user_admin']; ?></h3>
</body>
</html>