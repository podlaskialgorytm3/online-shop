<?php

require_once '../../config.php';
try {
    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$database, $login, $password);
    $pdo->query('SET NAMES utf8');
} catch (PDOException $e) {
    echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
    exit();
}

$stmt = $pdo->query('SELECT * FROM ulubione_produkty');

$html = '';
foreach ($stmt as $row){
    $html = '
    <div class="favourite-item">
    <a href="" class="link-to-item">
        <div class="image" style="background-image: url('.$row["URL"].')">

        </div>
    </a>
    <h2 class="title-item">'.$row["nazwa_produktu"].'</h2>
    <img src="../../images/delete.png" alt="Usuwanie" style="width: 50px;" data-id='.$row["Id_ulubiony_produkt"].'>
    </div>
    ';
}

sleep(1);

echo $html;
?>
