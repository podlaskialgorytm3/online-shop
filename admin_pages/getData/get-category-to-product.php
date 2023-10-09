<?php
require_once '../../config.php';
$prac = $pdo->query('SELECT * FROM kategorie');

$html = '';



while($row = $prac->fetch()){
    $html .= '<option value="';
    $html .= $row['id_kategorii'];
    $html .= '">';
    $html .= $row['nazwa_kategorii'];
    $html .= '</option>';
}

echo $html;