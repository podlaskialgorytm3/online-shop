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

function findCategory($id,$pdo){
    $categories = "";
    $connect = $pdo->query('SELECT k.nazwa_kategorii FROM kategorie k JOIN produkty_kategorie pk ON k.id_kategorii = pk.id_kategorii WHERE pk.Id_produktu ='. $id);
    while($rows = $connect->fetch()){
        $categories = $rows["nazwa_kategorii"]." ".$categories;
    }
    return $categories;
 }
 function findTag($id,$pdo){
    $connect = $pdo->query('SELECT parametry.nazwa_parametru FROM parametry WHERE id_parametru = '. $id);
    while($rows = $connect->fetch()){
       return $rows["nazwa_parametru"];
    }
 }


$html = '';
foreach ($stmt as $row){
    $html .=  '<tr>';
    $html .=  '<td>' . $row['Id_produktu'] . '</td>';
    $html .=  '<td>' . $row['nazwa_produktu'] . '</td>';
    $html .=  '<td>' . findCategory($row['Id_produktu'],$pdo) . '</td>';
    $html .=  '<td>' . findTag($row['id_parametru'],$pdo) . '</td>';
    $html .=  '<td>' . $row['cena'] . '</td>';
    $html .=  '<td>' . $row['stan_magazynowy'] . '</td>';
    $html .=  '<td>' . $row['opis_produktu'] . '</td>';
    $html .=  '<td><button class="edit edit-product" data-id="'.$row['Id_produktu'].'"><img src="../../images/edit.png" style="width: 30px" alt=""></button></td>';
    $html .=  '<td><button class="delete delete-product" data-id="'.$row['Id_produktu'].'"><img src="../../images/delete.png" style="width: 30px"  alt=""></button></td>';
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
<script src="../../js/DeletesProduct.js"></script>
<script src="../../js/EditsProduct.js"></script>
</body>
</html>