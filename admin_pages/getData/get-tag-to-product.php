<?php
require_once '../../config.php';
$html = '';

try {
    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$database, $login, $password);
    $pdo->query('SET NAMES utf8');
    $prac = $pdo->query('SELECT * FROM parametry');
    while($row = $prac->fetch()){
        $html .= '<option value="';
        $html .= $row['id_parametru'];
        $html .= '">';
        $html .= $row['wartosc_parametru'];
        $html .= '</option>';
    }
} catch (PDOException $e) {
    echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
    exit();
}


echo $html;