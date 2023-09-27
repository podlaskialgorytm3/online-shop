<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'components/meta.php' ?>
    <title>SKLEP M&D | Przypomnij hasło!</title>
    <link rel="stylesheet" href="css/register-form.css">
</head>
<body>
<?php include 'components/bookmark.php'; ?>
<div class="container">
    <h2>Przypomij hasło!</h2>
    <form action="vendor/send-password-reset.php" method="post">
        <div class="form-group">
            <input type="email" id="email" name="email" placeholder="Wpisz swój email!">
        </div>
        <div class="form-group">
                <button class="send-code">Wyślij link na mail'a!</button>
        </div>
    </form>
</div>
</body>
</html>