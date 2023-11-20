<?php

require_once '../../config.php';
session_start();
$id_user = json_decode($_SESSION['user_name']);
try {
    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$database, $login, $password);
    $pdo->query('SET NAMES utf8');
} catch (PDOException $e) {
    echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
    exit();
}

$stmt = $pdo->query('SELECT * FROM ulubione_produkty WHERE ID_USER ='.$id_user);

$html = '';
foreach ($stmt as $row){
    $html .= '
    <div class="favourite-item">
    <a href="../product-page.php?id='.$row["Id_produktu"].'&name='.$row["nazwa_produktu"].'" class="link-to-item" style="display: block;">
        <div class="image" style="background-image: url('.$row["URL"].')">

        </div>
    </a>
    <h2 class="title-item">'.$row["nazwa_produktu"].'</h2>
    <button class="delete-item" data-id='.$row["Id_ulubiony_produkt"].'>Usuń z ulubionych</>
    </div>
    ';
}

sleep(1);

echo $html;
?>
