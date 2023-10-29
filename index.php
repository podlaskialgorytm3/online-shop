<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'components/meta.php'?>
    <link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.core.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.core.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.theme.min.css">
    <title>SKLEP M&D</title>
</head>
<body>
    <?php include 'components/header.php' ?>
    <div class="glide">
    <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
            <li class="glide__slide">Slide 1</li>
            <li class="glide__slide">Slide 2</li>
            <li class="glide__slide">Slide 3</li>
        </ul>
    </div>
    <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">Poprzedni</button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">Następny</button>
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/@glidejs/glide"></script>
<script src="js/Slider.js"></script>
</body>
</html>