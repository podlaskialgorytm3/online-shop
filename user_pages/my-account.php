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
    <div class="side-panel">
        <h2 class="greet"></h2>
        <a href="">
            <div class="order-link">
                
            </div>
        </a>
        <a href="">
            <div class="favourite-link"></div>
        </a>
        <a href="">
            <div class="data-user-link">

            </div>
        </a>
        <a href="">
            <div class="settings-account-link">

            </div>
        </a>
    </div>
</body>
</html>