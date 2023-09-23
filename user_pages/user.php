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
    <?php include '../components/meta.php' ?>
    <title>SKLEP M&D | USER</title>
</head>
<body>
    <h1>STRONA DLA USERA</h1>
    <h3>Witaj <?php echo $_SESSION['user_name']; ?></h3>
    <a href="../logout.php">Wyloguj się!</a>
</body>
</html>