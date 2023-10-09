<?php
require_once '../../config.php';
$prac = $pdo->query('SELECT * FROM parametry');

$html = '';



while($row = $prac->fetch()){
    $html .= '<option value="';
    $html .= $row['id_parametru'];
    $html .= '">';
    $html .= $row['nazwa_parametru'];
    $html .= '</option>';
}

echo $html;