<?php 
@include '../config.php';
$link = "../index.php";
if(isset($_SESSION['user_name'])){
    $link = "../user_pages/user.php";
}

?>
<head>
    <link rel="stylesheet" href="../css/bookmark.css">
</head>
<body>
    <div class="bookmark">
        <a href=<?php echo $link; ?> title="Powrót na stronę główną."><img src="../images/shop_icon.png" alt="Ikonka sklepu!"></a>
    </div>
</body>
</html>