<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    function redirectToSignupWithError($errorMessage)
    {
        $_SESSION['signUp_error'] = $errorMessage;
        header('Location: ../signUp.php'); 
        exit;
    }

    // Sanificazione input
    $email = htmlspecialchars(strip_tags(trim($_POST['email'] ?? '')));
    $password = htmlspecialchars(strip_tags(trim($_POST['password'] ?? '')));

    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        redirectToSignupWithError("Invalid email format.");
    }

    // Validazione della password
    if (strlen($password) < 8) {
        redirectToSignupWithError("Password must be at least 8 characters long.");
    }

    include '../includes/db.php'; // Include il file di connessione al database

    // Preparo la query per inserire l'utente nel database 
    $stmt = $pdo->prepare("INSERT INTO users ( email, password) VALUES (:email, :password)");

    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', password_hash($password, PASSWORD_DEFAULT));

    // Eseguo la query con i dati recuperati dal form
    $stmt->execute();

    // Verifico se la registrazione è riuscita controllando il numero di righe inserite
    if ($stmt->rowCount() > 0) {
        // Registrazione riuscita, reindirizzo alla pagina di login
        header('Location: ../login.php');
        exit;
    } else {
        // Registrazione fallita, reindirizzo alla pagina di registrazione con un messaggio di errore
        redirectToSignupWithError("Registration failed. Please try again.");
    }
}