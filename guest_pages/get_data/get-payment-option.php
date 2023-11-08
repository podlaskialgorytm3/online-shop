<?php

require_once '../../config.php';
try {
    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$database, $login, $password);
    $pdo->query('SET NAMES utf8');
} catch (PDOException $e) {
    echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
    exit();
}

$stmt = $pdo->query('SELECT * FROM platnosc');



$html = '';
foreach ($stmt as $row){
   $html .= '<div class="payment">';
   $html .= '<input type="radio" name="payment" value="'.$row['Id_platnosci'].'">';
   $html .= '<p class="payment-type">'.$row["typ_platnosci"].'</p>';
   $html .= '<p class="payment-company">'.$row["firma"].'</p>';
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