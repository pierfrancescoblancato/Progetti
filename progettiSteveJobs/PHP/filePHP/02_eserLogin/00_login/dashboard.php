<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="styles.css" defer>
    <script href="script.js" defer></script>
</head>

<body>
    <div class="container">
        <h2>Dashboard</h2>

        <div class="successo">
            Accesso effettuato con successo!
        </div>

        <p>
            Benvenuto nell'area riservata.

            your email: <?php 
            $email = $_GET['email'] ?? 'Non disponibile';
            echo $email; ?>
        </p>

        <p style="margin-top: 30px;">
            <a href="login.php" style="color: #4CAF50; text-decoration: none;">Torna al login</a>
        </p>
    </div>
</body>

</html>

