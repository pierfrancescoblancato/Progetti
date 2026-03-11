<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === "POST") {

    function redirectToLogInWithError($errorMessage)
    {
        $_SESSION['logIn_error'] = $errorMessage;
        header('Location: ../logIn.php'); 
        exit;
    }

    // Sanificazione input
    $email = htmlspecialchars(strip_tags(trim($_POST['email'] ?? '')));
    $password = htmlspecialchars(strip_tags(trim($_POST['password'] ?? '')));

    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        redirectToLogInWithError("Invalid email format.");
    }
    
    // Validazione della password
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
