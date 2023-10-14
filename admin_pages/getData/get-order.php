<?php

require_once '../../config.php';
try {
    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$database, $login, $password);
    $pdo->query('SET NAMES utf8');
} catch (PDOException $e) {
    echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
    exit();
}
function findDelivery($id,$pdo){
    $connect = $pdo->query('SELECT dostawcy.Nazwa FROM dostawcy WHERE Id_dostawcy = '. $id);
    while($rows = $connect->fetch()){
       return $rows["Nazwa"];
    }
 }

$full_price = 0;

function findPrice($id,$pdo,$full_price){
    $connect = $pdo->query('SELECT * FROM zamowienia_produkty WHERE Id_zamowienia = '. $id);
    while($rows = $connect->fetch()){
        $connect2 = $pdo->query('SELECT cena FROM produkty WHERE Id_produktu = '. $rows['Id_produktu']);
        while($rows2 = $connect2->fetch()){
            $full_price = $rows2['cena'] + $full_price;
        }
    }
    return $full_price;
}


$stmt = $pdo->query('SELECT * FROM zamowienia');

$html = '';
foreach ($stmt as $row){
    $html .=  '<tr>';
    $html .=  '<td>' . $row['Id_zamowienia'] . '</td>';
    $html .=  '<td>' . $row['email'] . '</td>';
    $html .=  '<td>' . $row['data_zamowienia'] . '</td>';
    $html .=  '<td>' . $row['status'] . '</td>';
    $html .=  '<td>' . findDelivery($row['Id_dostawcy'],$pdo) . '</td>';
    $html .=  '<td>' . findPrice($row['Id_zamowienia'],$pdo,$full_price) . '</td>';
    $html .=  '<td><button class="edit show-delivery" data-id="'.$row['Id_zamowienia'].'"><img src="../../images/show.png" style="width: 30px" alt=""></button></td>';
    $html .=  '<td><button class="edit edit-delivery" data-id="'.$row['Id_zamowienia'].'"><img src="../../images/edit.png" style="width: 30px" alt=""></button></td>';
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

</body>
</html>