<?php

require_once '../../config.php';
try {
    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$database, $login, $password);
    $pdo->query('SET NAMES utf8');
} catch (PDOException $e) {
    echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
    exit();
}

$stmt = $pdo->query('SELECT * FROM dostawcy');



$html = '';
foreach ($stmt as $row){
   $html .= '<div class="supplier">';
   $html .= '<input type="radio" name="delivery" value="'.$row['Id_dostawcy'].'">';
   $html .= '<p class="delivery-name">'.$row["Nazwa"].'</p>';
   $html .= '<p class="delivery-price">'.$row["Cena"].'zł</p>';
   $html .= '</div>';
}

sleep(1);

echo $html;
?>
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

</body>
</html>