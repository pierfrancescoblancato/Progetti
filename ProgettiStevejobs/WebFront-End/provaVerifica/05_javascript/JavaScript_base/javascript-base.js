// RIGA 1-5: Prendo elementi
const bottone = document.getElementById('mioBottone');
const risultato1 = document.getElementById('risultato1');
const box = document.getElementById('mioBox');
const risultato2 = document.getElementById('risultato2');

const campo = document.getElementById('campoTesto');
const risultato3 = document.getElementById('risultato3');

// RIGA 6-9: Evento click sul bottone
bottone.addEventListener('click', function() {
    risultato1.innerHTML = '✓ Bottone cliccato!';
    risultato1.style.background = '#d4edda';
    });

// RIGA 10-15: Funzione per cambiare classe
function cambiaColore() {
    box.classList.toggle('evidenziato');
    if (box.classList.contains('evidenziato')) {
        risultato2.innerHTML = '✓ Box rosso';
        } else {
            risultato2.innerHTML = '✓ Box blu';
        }
        }

// RIGA 16-22: Evento input nel campo
campo.addEventListener('input', function() {
if (campo.value) {
    risultato3.innerHTML = `Hai scritto: ${campo.value}`;
} else {
    risultato3.innerHTML = 'Scrivi qualcosa...';
}
});

// RIGA 23-25: Bonus - click sul box
box.addEventListener('click', function() {
    alert('Hai cliccato il box!');
});