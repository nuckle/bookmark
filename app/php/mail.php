<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


$email = trim($_POST['email']);
$subject = 'subscription';

$mail->isSMTP();
$mail->Host = '';
$mail->SMTPAuth = true;
$mail->Username = '';
$mail->Password = '';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;


$mail->setFrom('');
$mail->addAddress($email);
$mail->isHTML(true);

$mail->Subject = $subject;
$mail->Body    = "it's you - " .$email;
$mail->AltBody = '';


if(!$mail->send()) {
    echo 'Message could not be sent. Mailer Error: {$mail->ErrorInfo}';
} else {
    echo 'Success';
}
?>
