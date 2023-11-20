<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'components/meta.php'?>
    <link rel="stylesheet" href="/css/search.css">
    <title>Produkty</title>
</head>
<body>
    <?php include 'components/header.php' ?>
    <div class="search-options">
    <div class="container">
        <input type="text" placeholder="Parametr lub nazwa." id="search" >
        <div class="search"></div>
    </div>
    <select class="category">
        
    </select>
    <div class="price-range-container">
        <input type="number" class="price-input price-from" placeholder="od">
        <span>---</span>
        <input type="number" class="price-input price-to" placeholder="do">
    </div>
    </div>
    <div class="main">
    <?php include 'guest_pages/product-container.php'?>
    </div>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="/js/GetCategoriesToFind.js"></script>
</body>
</html>