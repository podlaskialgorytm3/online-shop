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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php @include '../admin_pages/components/meta.php' ?>
    <title>Zarządzanie Dostawami | SKLEP M&D</title>
</head>
<body>
<?php @include "components/header.php" ?>
    <h1>STRONA DLA ADMINISTRATORA | ZARZĄDZANIE DOSTAWAMI</h1>
    <h3>Witaj <?php echo $_SESSION['user_admin']; ?></h3>
</body>
</html>