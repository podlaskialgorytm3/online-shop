<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'components/meta.php' ?>
    <title>SKLEP M&D | Przypomnij hasło!</title>
    <link rel="stylesheet" href="css/register-form.css">
    <link rel="stylesheet" href="css/responsiveness.css">
</head>
<body>
<?php include 'components/bookmark.php'; ?>
<div class="container">
    <h2>Przypomij hasło!</h2>
    <form action="" method="post">
        <div class="form-group">
            <input type="email" id="email" name="email" placeholder="Wpisz swój email!" required>
        </div>
        <div class="form-group">
                <button class="send-code">Wyślij link na mail'a!</button>
        </div>
    </form>
</div>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="js/RedirectionToSendingPass.js"></script>
</body>
</html>