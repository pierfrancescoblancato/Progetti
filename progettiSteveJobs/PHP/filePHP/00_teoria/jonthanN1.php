<?php
$menu_item_index = $_POST['menu_item'] ?? null; // Recupera l'elemento del menu selezionato dal form, se presente

$menu = [
    [
        "name" => "Porchetta",
        "price" => 500,
    ],
    [
        "name" => "Cavaddu",
        "price" => 700,
    ],
    [
        "name" => "Wurstel",
        "price" => 300,
    ],
];

// Funzione per formattare il prezzo in euro con 2 decimali, separatore decimale ',' e separatore delle migliaia '.'
function formatPrice($price)
{
    // Formatta il prezzo in euro con 2 decimali, separatore decimale ',' e separatore delle migliaia '.'
    return number_format($price / 100, 2, ',', '.');
}
?>

<form method="post" action="jonhatanN1.php">
    <h1> Benvenuti da Jonhatan N1! Accattativi un pan...inu! </h1>
    <select name="menu_item">
        <option value="">Seleziona un piatto</option>
        <?php
        // FOREACH - stampa le opzioni del menu
        foreach ($menu as $index => $item) {
            // Formatta il prezzo in euro con 2 decimali, separatore decimale ',' e separatore delle migliaia '.'
            $price = formatPrice($item['price']); // Formatta il prezzo in euro

            // Stampa l'opzione del menu con il nome e il prezzo formattato
            echo "<option value=\"{$index}\">{$item['name']} - {$price}€</option>";
        }
        ?>
    </select>

    <button type="submit">Invia</button>
</form>

<?php
// Controlla se è stato selezionato un elemento del menu e mostra un messaggio
// isset() ritorna true se la variabile indicata esiste e non è null, altrimenti ritorna false
if (isset($menu[$menu_item_index])) {
    // Recupera l'elemento del menu selezionato
    $item = $menu[$menu_item_index];

    // Formatta il prezzo in euro con 2 decimali, separatore decimale ',' e separatore delle migliaia '.'
    $formattedPrice = formatPrice($item['price']);

    // Stampa il messaggio con il nome del piatto e il prezzo formattato
    echo "<p>Hai selezionato: {$item['name']}, ma pavari {$formattedPrice}€ </p>";
} else {
    // Se non è stato selezionato un elemento del menu, mostra un messaggio generico
    echo "<p>Seleziona un piatto dal menu per vedere il messaggio.</p>";
}
?>