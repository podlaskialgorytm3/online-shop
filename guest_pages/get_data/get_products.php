<?php

require_once '../../config.php';
try {
    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$database, $login, $password);
    $pdo->query('SET NAMES utf8');
} catch (PDOException $e) {
    echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
    exit();
}

$stmt = $pdo->query('SELECT * FROM produkty');

$html = '';
foreach ($stmt as $row){
    $html .= '<a href="../../product-page.php?id='.$row["Id_produktu"].'&name='.$row["nazwa_produktu"].'">';
    $html .= '<div class="product-card">';
    $html .= '    <div class="product-image" style="background-image: url('.$row["URL"].')">';
    $html .= '    </div>';
    $html .= '    <div class="product-info">';
    $html .= '        <h2 class="product-title">';
    $html .=        $row["nazwa_produktu"];
    $html .= '        </h2>';
    $html .= '        <p class="product-description">';
    $html .=       $row["opis_produktu"];
    $html .= '        </p>';
    $html .= '        </div>';
    $html .= '        <div class="footer">';
    $html .= '            <p class="price">';
    $html .=       $row["cena"]." zł";
    $html .= '            </p>';
    $html .= '            <button class="add-to-cart" data-id='.$row["Id_produktu"].'><img src="../../images/addtocard.png" style="width: 50px;" /></button>';
    $html .= '    </div>';
    $html .= '</div>';
    $html .= '</a>';
}

sleep(1);

echo $html;
?>