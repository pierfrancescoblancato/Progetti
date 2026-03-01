<?php
// Un array associativo PHP
$utente = [
    'nome' => 'Mario',
    'cognome' => 'Rossi',
    'eta' => 30,
    'citta' => 'Roma'
];

// Convertiamo in JSON
$json_string = json_encode($utente);

echo $json_string;
?>