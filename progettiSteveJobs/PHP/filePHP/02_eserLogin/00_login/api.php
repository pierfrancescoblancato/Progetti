<?php
session_start();

define('EMAIL_CORRETTA', 'email@gmail.com');
define('PASSWORD_CORRETTA', '12345678');

// Hash della password corretta (solo per test)
$password_hashed = password_hash(PASSWORD_CORRETTA, PASSWORD_DEFAULT);

// Sanificazione input
$email = htmlspecialchars(strip_tags(trim($_POST['email'] ?? '')));
$password = htmlspecialchars(strip_tags(trim($_POST['password'] ?? '')));

if ($_SERVER['REQUEST_METHOD'] === "POST") {

    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $_SESSION['messageError'] = "Email non valida o vuota!";
        header("Location: login.php");
        exit();
    }

    if (strlen($password) < 8) {
        $_SESSION['messageError'] = "La password deve contenere almeno 8 caratteri!";
        header("Location: login.php");
        exit();
    }

    if ($email === EMAIL_CORRETTA && password_verify($password, $password_hashed)) {
        $_SESSION['email'] = $email;
        header("Location: dashboard.php");
        exit();
    }
    else {
    $_SESSION['messageError'] = "Credenziali errate!";
    header("Location: login.php");
    exit();
    }
}
?>
