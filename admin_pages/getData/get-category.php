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
    $html .=  '<tr>';
    $html .=  '<td>' . $row['id_kategorii'] . '</td>';
    $html .=  '<td>' . $row['nazwa_kategorii'] . '</td>';
    $html .=  '<td>' . $row['opis_kategorii'] . '</td>';
    $html .=  '<td><button class="edit edit-category" data-id="'.$row['id_kategorii'].'"><img src="../../images/edit.png" style="width: 30px" alt=""></button></td>';
    $html .=  '<td><button class="delete delete-category" data-id="'.$row['id_kategorii'].'"><img src="../../images/delete.png" style="width: 30px"  alt=""></button></td>';
    $html .=  '</tr>';
}

sleep(1);

echo $html;
?>
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="../../js/DeleteCategory.js"></script>
</body>
</html>