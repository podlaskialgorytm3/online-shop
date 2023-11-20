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



$html = '';
foreach ($stmt as $row){
    $html .= '<option value='.$row['id_kategorii'].'>'.$row['nazwa_kategorii'].'</option>';
}

sleep(1);

echo $html;
?>