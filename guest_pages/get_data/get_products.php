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
    $html .= '    <div class="product-image">';
    $html .= '    </div>';
    $html .= '    <div class="product-info">';
    $html .= '        <h2 class="product-title">';
    $html .=    $row["nazwa_produktu"];
    $html .= '        </h2>';
    $html .= '        <p class="product-description">';
    $html .= '            <!-- Opis produktu -->';
    $html .= '        </p>';
    $html .= '        <div class="footer">';
    $html .= '            <p class="price">';
    $html .= '                <!-- Cena produktu -->';
    $html .= '            </p>';
    $html .= '            <button class="add-to-cart">DODAJ DO KOSZYKA</button>';
    $html .= '        </div>';
    $html .= '    </div>';
    $html .= '</div>';
}

sleep(1);

echo $html;
?>