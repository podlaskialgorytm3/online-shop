<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

@include "../config.php";

require "autoload.php";

$mail = new PHPMailer(true);

//$mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.gmail.com";
$mail->SMTP = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;
$mail->Username = "sklepmichaldawid@gmail.com";
$mail->Password = "aazyymuuewhcrrxt";

$mail->isHtml(true);

$email = $_POST["email"];

$token = bin2hex(random_bytes(16));

$token_hash = hash("sha256", $token);

$expiry = date("Y-m-d H:i:s", time() + 60 * 30);

$mysqli = new mysqli(hostname: $hostname,username: $login,password: $password,database: $database);
                     
$sql = "UPDATE user
        SET reset_token_hash = ?,
            reset_token_expires_at = ?
        WHERE email = ?";

$stmt = $mysqli->prepare($sql);

$stmt->bind_param("sss", $token_hash, $expiry, $email);

$stmt->execute();

if($mysqli->affected_rows){

    

    $mail->setFrom("noreply@michaldawid.pl");
    $mail->addAddress($email);
    $mail->Subject = "Resetowanie hasla";
    $mail->Body = <<<END
    Aby zresetować hasło <a href="localhost/reset-password.php?token=$token"> kliknij tutaj!</a>
    END;
    try{
        $mail->send();
    }
    catch(Exception $e){
        echo "Wiadomość nie została wysłania. {$mail->ErrorInfo}";
    }
}

?>