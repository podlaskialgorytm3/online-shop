<?php
require_once '../../config.php';
$html = '';

try {
    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$database, $login, $password);
    $pdo->query('SET NAMES utf8');
    $prac = $pdo->query('SELECT * FROM kategorie');
    while($row = $prac->fetch()){
        $html .= '<option value="';
        $html .= $row['id_kategorii'];
        $html .= '">';
        $html .= $row['nazwa_kategorii'];
        $html .= '</option>';
    }
} catch (PDOException $e) {
    echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
    exit();
}


echo $html;