<?php

require_once '../../config.php';
try {
    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$database, $login, $password);
    $pdo->query('SET NAMES utf8');
} catch (PDOException $e) {
    echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
    exit();
}

$stmt = $pdo->query('SELECT * FROM strony');

$html = '';
foreach ($stmt as $row){
    if($row['status'] == 'widoczny')
        $html .=  '<a href="simple-page.php?id='.$row['id_strony'].'&tytul='.$row['tytul'].'">'.$row['tytul'].'</a>';
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