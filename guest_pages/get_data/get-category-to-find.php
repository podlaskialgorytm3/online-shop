<?php

require_once '../../config.php';
try {
    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$database, $login, $password);
    $pdo->query('SET NAMES utf8');
} catch (PDOException $e) {
    echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
    exit();
}

$stmt = $pdo->query('SELECT * FROM kategorie');



$html = '<option value=""></option>';
foreach ($stmt as $row){
    $html .= '<option value="'.$row['nazwa_kategorii'].'">'.$row['nazwa_kategorii'].'</option>';
}

sleep(1);

echo $html;
?>