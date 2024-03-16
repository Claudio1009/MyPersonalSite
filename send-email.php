<?php
$response = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nume = $_POST["name"];
    $email = $_POST["email"];
    $subiect = $_POST["subject"];
    $mesaj = $_POST["message"];
    
    $destinatar = "starkfamous9@gmail.com"; // Adresa la care vrei să primești e-mailurile
    $subiect_email = "Mesaj nou de la $nume: $subiect";
    $continut_email = "Nume: $nume\nEmail: $email\nSubiect: $subiect\nMesaj: $mesaj";
    
    // Trimite e-mailul și verifică dacă a fost trimis cu succes
    if (mail($destinatar, $subiect_email, $continut_email)) {
        $response["success"] = true;
        $response["message"] = "Mesajul a fost trimis cu succes!";
    } else {
        $response["success"] = false;
        $response["message"] = "Eroare la trimiterea mesajului. Te rugăm să încerci din nou mai târziu.";
    }
}

echo json_encode($response);
?>