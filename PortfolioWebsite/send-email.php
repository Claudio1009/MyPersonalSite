<?php

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$mailheader = "From: ".$name."<".$email.">\r\n";

$recipient = "claudiuciupitu7@gmail.com";

mail($recipient, $subject, $message, $mailheader)
or die("Error!");

echo'
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contact Form</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles/styles.css">
</head>
<body>
<div class="container">
<h2>Thank you for contacting me. I will get back to you as
soon as possible!</h2>
<p>Go back to the <a href="index.html">homepage</a></p>
</div>
</body>
</html>'


?>