<?php
session_start();

// Se l'utente non è loggato, lo rimando al login
if (!isset($_SESSION['email'])) {
    header("Location: login.php");
    exit();
}

$email = $_SESSION['email'];
?>
<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>

<body>
    <div class="container">
        <h2>Dashboard</h2>

        <div class="successo">
            Accesso effettuato con successo!
        </div>

        <p>
            Benvenuto nell'area riservata.<br>
            La tua email: <strong><?= htmlspecialchars($email) ?></strong>
        </p>

        <p style="margin-top: 30px;">
            <a href="logout.php" style="color: #4CAF50; text-decoration: none;">Torna al login</a>
        </p>

        <p style="margin-top: 30px;">
            <a href="logout.php" style="color: #9f9f9f; text-decoration: none;">Logout</a>
        </p>
       
    </div>
</body>

</html>
