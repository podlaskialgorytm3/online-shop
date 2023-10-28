<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'components/meta.php'?>
    <title>SKLEP M&D</title>
    <style>
        .thumbnails {
  display: flex;
  margin: 1rem auto 0;
  padding: 0;
  justify-content: center;
}

.thumbnail {
  width: 70px;
  height: 70px;
  overflow: hidden;
  list-style: none;
  margin: 0 0.2rem;
  cursor: pointer;
}

.thumbnail img {
  width: 100%;
  height: auto;
}
    </style>
</head>
<body>
    <?php include 'components/header.php' ?>
    <section id="main-carousel" class="splide" aria-label="My Awesome Gallery">
    <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <img src="/images/admin-img.png" alt="">
      </li>
      <li class="splide__slide">
        <img src="/images/checked.png" alt="">
      </li>
      <li class="splide__slide">
        <img src="/images/delete.png" alt="">
      </li>
      <li class="splide__slide">
        <img src="/images/edit.png" alt="">
      </li>
    </ul>
  </div>
</section>
<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>
<script src="js/Slider.js"></script>
</body>
</html>