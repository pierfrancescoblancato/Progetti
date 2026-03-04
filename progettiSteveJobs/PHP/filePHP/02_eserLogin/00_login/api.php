<?php
define('EMAIL_CORRETTA', 'email@gmail.com');
define('PASSWORD_CORRETTA', '12345678');

// Hash della password corretta (solo per test)
$password_hashed = password_hash(PASSWORD_CORRETTA, PASSWORD_DEFAULT);

$messaggio = "";

// Sanificazione input
$email = htmlspecialchars(strip_tags(trim($_POST['email'] ?? '')));
$password = htmlspecialchars(strip_tags(trim($_POST['password'] ?? '')));

// Se il form è stato inviato
if ($_SERVER['REQUEST_METHOD'] === "POST") {

    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $messaggio = "Email non valida o vuota!";
        header("Location: login.php?messaggio=" . urlencode($messaggio)); 
        exit(); 
    }
    else if (strlen($password) < 8) {
        $messaggio = "La password deve contenere almeno 8 caratteri!";
        header("Location: login.php?messaggio=" . urlencode($messaggio)); 
        exit();
    }
    else if ($email === EMAIL_CORRETTA && password_verify($password, $password_hashed)) {
        header("Location: login.php?email=" . urlencode($email));
        exit();
    }
    else {
        $messaggio = "Credenziali errate!";
        header("Location: login.php?messaggio=" . urlencode($messaggio)); 
        exit(); 
    }
}
?>
