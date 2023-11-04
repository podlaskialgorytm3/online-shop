<!DOCTYPE html>
<html lang="en">
<head>
    <?php include __DIR__ . '/components/meta.php' ?>
    <title><?php echo $_GET['name']; ?></title>
</head>
<body>
    <?php include 'components/header.php' ?>
    <div class="content">
        <?php
        require_once 'config.php';

        try {
            $pdo = new PDO('mysql:host=' . $hostname . ';dbname=' . $database, $login, $password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $pdo->exec('SET NAMES utf8');
        } catch (PDOException $e) {
            echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
            exit();
        }

        function findCategory($id,$pdo){
            $categories = "";
            $connect = $pdo->query('SELECT k.nazwa_kategorii FROM kategorie k JOIN produkty_kategorie pk ON k.id_kategorii = pk.id_kategorii WHERE pk.Id_produktu ='. $id);
            while($rows = $connect->fetch()){
                $categories = $rows["nazwa_kategorii"]." ".$categories;
            }
            return $categories;
         }
         function findColor($id,$pdo){
            $tags = "";
            $connect = $pdo->query('SELECT * FROM parametry p JOIN produkty_parametry pp ON p.id_parametru = pp.Id_parametru WHERE pp.Id_produktu =' . $id . ' AND p.typ_parametru = "kolor"');
            while($rows = $connect->fetch()){
                $tags = '<option value="'.$rows['id_parametru'].'">'.$rows['wartosc_parametru'].'</option> '.$tags;
            }
            return $tags;
         }
         function findSize($id,$pdo){
            $tags = "";
            $connect = $pdo->query('SELECT * FROM parametry p JOIN produkty_parametry pp ON p.id_parametru = pp.Id_parametru WHERE pp.Id_produktu =' . $id . ' AND p.typ_parametru = "rozmiar"');
            while($rows = $connect->fetch()){
                $tags = '<option value="'.$rows['id_parametru'].'">'.$rows['wartosc_parametru'].'</option> '.$tags;
            }
            return $tags;
         }

        $id = isset($_GET['id']) ? $_GET['id'] : 0;

        $stmt = $pdo->prepare('SELECT * FROM produkty WHERE Id_produktu = :id');
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $name = $row["nazwa_produktu"];
            $description = $row["opis_produktu"];
            $URL = $row['URL'];
            $price = $row['cena'];
            $categories = findCategory($row['Id_produktu'],$pdo);
            $colors = findColor($row['Id_produktu'],$pdo);
            $sizes = findSize($row['Id_produktu'],$pdo);
            echo '<div class="product-page">';
            echo '    <div class="left-side" style="backround-image: url('.$URL.');">';
            echo '    ';
            echo '    </div>';
            echo '    <div class="right-side">';
            echo '        <div class="header">';
            echo '            <h1 class="title">'.$row['title'].'</h1>';
            echo '            <p class="price"></p>';
            echo '        </div>';
            echo '        <div class="center">';
            echo '            <select name="" id="" class="colors">';
            echo '            ';
            echo '            </select>';
            echo '            <select name="" id="" class="sizes">';
            echo '            ';
            echo '            </select>';
            echo '        </div>';
            echo '        <div class="add-card">';
            echo '            <button class="add-to-card">';
            echo '                Dodaj do koszyka';
            echo '            </button>';
            echo '        </div>';
            echo '        <div class="desc">';
            echo '            <p class="description">';
            echo '            ';
            echo '            </p>';
            echo '        </div>';
            echo '    </div>';
            echo '</div>';
            
        } else {
            echo 'Nie znaleziono rekordu o ID: ' . $id;
        }

        $pdo = null;
        ?>
    </div>
</body>
</html>


