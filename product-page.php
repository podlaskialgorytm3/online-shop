<!DOCTYPE html>
<html lang="en">
<head>
    <?php include __DIR__ . '/components/meta.php' ?>
    <title><?php echo $_GET['name']; ?></title>
</head>
<body>
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

        $id = isset($_GET['id']) ? $_GET['id'] : 0;

        $stmt = $pdo->prepare('SELECT * FROM produkty WHERE Id_produktu = :id');
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $name = $row["nazwa_produktu"];
            $description = $row["opis_produktu"];
            echo '<h1>'.$name.'</h1>';
            echo '<p>'.$description.'</p>';
        } else {
            echo 'Nie znaleziono rekordu o ID: ' . $id;
        }

        $pdo = null;
        ?>
    </div>
</body>
</html>
