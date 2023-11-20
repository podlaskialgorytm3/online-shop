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
        <label for="minPrice">Min Price:</label>
        <input type="number" id="minPrice" min="0" step="1" value="0">
        
        <label for="maxPrice">Max Price:</label>
        <input type="number" id="maxPrice" min="0" step="1" value="100">

        <input type="range" id="priceSlider" min="0" max="100" value="0">

        <div class="price-range-values">
            <span id="minValue">0</span>
            <span id="maxValue">100</span>
        </div>
    </div>
    </div>
    <div class="main">
    <?php include 'guest_pages/product-container.php'?>
    </div>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="/js/GetCategoriesToFind.js"></script>
</body>
</html>