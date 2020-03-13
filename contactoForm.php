<?php

if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "no-reply@c1740351.ferozo.com";
    $headers = "De: ".$mailFrom;
    $txt = "Recibiste un e-mail de: ".$name.".\n\n".$message;

mail($mailTo; $phone, $txt, $headers);
header("Location: index.php?mailsend")

}

?>