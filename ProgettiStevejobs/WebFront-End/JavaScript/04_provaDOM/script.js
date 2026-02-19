// 1. JSON Persona - Oggetto complesso
const persona = {
    nome: "Tizio",
    cognome: "Rossi",
    eta: 35,
    indirizzo: {
        via: "Maddem",
        città: "Catania",
        CAP: 95125,
        provincia: "CT"
    },
    interessi: ["programmazione", "calcio", "musica"],
    stampaInfo: function() {
        return `${this.nome} ${this.cognome}, ${this.eta} anni\nIndirizzo: ${this.indirizzo.via}, ${this.indirizzo.città} (${this.indirizzo.CAP})`;
    }
};

// Console log per dimostrazione
console.log("=== ESERCIZIO DOM E JAVASCRIPT ===");
console.log("\n1. JSON Persona:");
console.dir(persona);
console.log("\n2. Metodo dell'oggetto:");
console.log(persona.stampaInfo());
console.log("\n3. Document object:");
console.dir(window.document);

// 2. Dimensioni finestra (window object)
function aggiornaDimensioniFinestra() {
    const dimElement = document.getElementById('window-dimensions');
    dimElement.textContent = 
        `Larghezza: ${window.outerWidth}px, Altezza: ${window.outerHeight}px\n` +
        `Larghezza viewport: ${window.innerWidth}px, Altezza viewport: ${window.innerHeight}px`;
}

// Event listener per resize
window.addEventListener('resize', aggiornaDimensioniFinestra);
aggiornaDimensioniFinestra(); // Chiamata iniziale

// 3. Variabili globali per dimostrazione
let contatoreItems = 3;
let tuttiItemsQuery = document.querySelectorAll('.item'); // NodeList STATICA
let tuttiItemsClassName = document.getElementsByClassName('item'); // HTMLCollection LIVE

// Aggiorna contatore
function aggiornaContatore() {
    document.getElementById('contatore').textContent = 
        `(${tuttiItemsClassName.length} elementi)`;
    aggiornaStatistiche();
}

// Aggiorna statistiche
function aggiornaStatistiche() {
    document.getElementById('node-list-status').textContent = 
        `NodeList statica (querySelectorAll): ${tuttiItemsQuery.length} elementi`;
    document.getElementById('html-collection-status').textContent = 
        `HTMLCollection live (getElementsByClassName): ${tuttiItemsClassName.length} elementi`;
}

// 4. Aggiungi nuovo item
document.getElementById('btn-add').addEventListener('click', function() {
    contatoreItems++;
    
    // Crea nuovo elemento
    const nuovoItem = document.createElement('div');
    nuovoItem.className = 'item';
    nuovoItem.textContent = `Item ${contatoreItems} (aggiunto dinamicamente)`;
    
    // Aggiungi al DOM
    const listaContainer = document.getElementById('lista-container');
    listaContainer.appendChild(nuovoItem);
    
    // Aggiorna contatore
    aggiornaContatore();
    
    // Dimostrazione: NodeList vs HTMLCollection
    console.log("\n=== DOPO AGGIUNTA ITEM ===");
    console.log("NodeList.length:", tuttiItemsQuery.length);
    console.log("HTMLCollection.length:", tuttiItemsClassName.length);
    
    // Mostra differenza nell'output
    const output = document.getElementById('navigation-output');
    output.innerHTML = `NUOVO ITEM AGGIUNTO!\n` +
                      `NodeList (statica) vede ancora: ${tuttiItemsQuery.length} elementi\n` +
                      `HTMLCollection (live) vede ora: ${tuttiItemsClassName.length} elementi`;
});

// 5. Evidenzia primo item
document.getElementById('btn-highlight').addEventListener('click', function() {
    // Usando firstElementChild
    const primoItem = document.querySelector('#lista-container');
    if (primoItem.firstElementChild) {
        // Navigazione: parent → first child
        const primoDivItem = primoItem.children[2]; // Il primo item è il terzo child
        if (primoDivItem) {
            primoDivItem.classList.add('highlight');
            
            const output = document.getElementById('navigation-output');
            output.textContent = `Primo item evidenziato!\n` +
                                `Trovato tramite: parent → firstElementChild → nextElementSibling`;
        }
    }
});

// 6. Rimuovi ultimo item
document.getElementById('btn-remove').addEventListener('click', function() {
    if (tuttiItemsClassName.length > 0) {
        // Usando lastElementChild
        const listaContainer = document.getElementById('lista-container');
        const ultimoItem = listaContainer.lastElementChild;
        
        if (ultimoItem && ultimoItem.classList.contains('item')) {
            ultimoItem.remove();
            aggiornaContatore();
            
            const output = document.getElementById('navigation-output');
            output.textContent = `Ultimo item rimosso!\n` +
                                `Rimossi: ${contatoreItems - tuttiItemsClassName.length} elementi totali`;
        }
    }
});

// 7. Toggle classe
document.getElementById('btn-toggle').addEventListener('click', function() {
    // Seleziona secondo item con querySelector avanzato
    const secondoItem = document.querySelector('.item:nth-of-type(2)');
    if (secondoItem) {
        secondoItem.classList.toggle('highlight');
        
        const output = document.getElementById('navigation-output');
        const stato = secondoItem.classList.contains('highlight') ? 'ATTIVATA' : 'DISATTIVATA';
        output.textContent = `Classe 'highlight' ${stato} sul secondo item\n` +
                            `Usato: classList.toggle('highlight')`;
    }
});

// 8. Confronta NodeList vs HTMLCollection
document.getElementById('btn-compare').addEventListener('click', function() {
    // Ricrea le selezioni per dimostrazione
    const nodeListStatic = document.querySelectorAll('.item');
    const htmlCollectionLive = document.getElementsByClassName('item');
    
    const output = document.getElementById('navigation-output');
    output.innerHTML = 
        `=== CONFRONTO NodeList vs HTMLCollection ===\n\n` +
        `NODELLIST (querySelectorAll):\n` +
        `- Tipo: ${nodeListStatic.constructor.name}\n` +
        `- Elementi: ${nodeListStatic.length}\n` +
        `- Statica: NON si aggiorna automaticamente\n` +
        `- Metodi: forEach disponibile\n\n` +
        `HTMLCOLLECTION (getElementsByClassName):\n` +
        `- Tipo: ${htmlCollectionLive.constructor.name}\n` +
        `- Elementi: ${htmlCollectionLive.length}\n` +
        `- Live: SI aggiorna automaticamente\n` +
        `- Metodi: solo indice, NO forEach\n\n` +
        `Items reali nella pagina: ${document.querySelectorAll('.item').length}`;
    
    // Dimostra che la NodeList non si è aggiornata
    console.log("\n=== CONFRONTO ===");
    console.log("NodeList originale (non aggiornata):", tuttiItemsQuery.length);
    console.log("NodeList nuova (querySelectorAll ora):", nodeListStatic.length);
    console.log("HTMLCollection (sempre aggiornata):", htmlCollectionLive.length);
});

// 9. Navigazione nel DOM
document.getElementById('btn-navigate').addEventListener('click', function() {
    const primoItem = document.querySelector('.item');
    if (!primoItem) return;
    
    const output = document.getElementById('navigation-output');
    let info = "=== NAVIGAZIONE DOM ===\n\n";
    
    // Navigazione verso l'alto
    info += "↑↑↑ VERSO L'ALTO (PARENT/ANCESTOR):\n";
    info += `- parentNode: ${primoItem.parentNode.nodeName}\n`;
    info += `- parentElement: ${primoItem.parentElement.className || primoItem.parentElement.id}\n`;
    info += `- closest('.container'): ${primoItem.closest('.container') ? 'Trovato!' : 'Non trovato'}\n\n`;
    
    // Navigazione laterale
    info += "↔ A LIVELLO (SIBLING):\n";
    info += `- previousSibling: ${primoItem.previousSibling ? primoItem.previousSibling.nodeName : 'null'}\n`;
    info += `- previousElementSibling: ${primoItem.previousElementSibling ? primoItem.previousElementSibling.nodeName : 'null'}\n`;
    info += `- nextSibling: ${primoItem.nextSibling ? primoItem.nextSibling.nodeName : 'null'}\n`;
    info += `- nextElementSibling: ${primoItem.nextElementSibling ? 'Trovato (' + primoItem.nextElementSibling.textContent.substring(0, 20) + '...)' : 'null'}\n\n`;
    
    // Navigazione verso il basso
    info += "↓↓↓ VERSO IL BASSO (CHILD/DESCENDANT):\n";
    info += `- childNodes: ${primoItem.childNodes.length} nodi\n`;
    info += `- children: ${primoItem.children.length} elementi\n`;
    info += `- firstChild: ${primoItem.firstChild.nodeName}\n`;
    info += `- firstElementChild: ${primoItem.firstElementChild ? primoItem.firstElementChild.nodeName : 'null'}\n`;
    info += `- lastChild: ${primoItem.lastChild.nodeName}\n`;
    info += `- lastElementChild: ${primoItem.lastElementChild ? primoItem.lastElementChild.nodeName : 'null'}\n`;
    
    output.textContent = info;
});

// 10. Trova parent più vicino
document.getElementById('btn-closest').addEventListener('click', function() {
    const item = document.querySelector('.item');
    if (item) {
        // Usa closest per trovare il parent più vicino con classe container
        const parentContainer = item.closest('.container');
        const parentWithId = item.closest('#lista-container');
        
        const output = document.getElementById('navigation-output');
        output.textContent = 
            `=== METODO CLOSEST ===\n\n` +
            `Elemento di partenza: ${item.textContent.substring(0, 30)}...\n\n` +
            `closest('.container'): ${parentContainer ? 'TROVATO - ' + parentContainer.className : 'NON TROVATO'}\n` +
            `closest('#lista-container'): ${parentWithId ? 'TROVATO - ' + parentWithId.id : 'NON TROVATO'}\n` +
            `closest('body'): ${item.closest('body') ? 'TROVATO' : 'NON TROVATO'}\n\n` +
            `Closest naviga verso l'alto fino a trovare un match!`;
    }
});

// 11. Mostra relazioni familiari
document.getElementById('btn-family').addEventListener('click', function() {
    const dynamicArea = document.getElementById('dynamic-area');
    dynamicArea.innerHTML = '';
    
    // Crea una struttura familiare
    const nonno = document.createElement('div');
    nonno.className = 'nonno';
    nonno.textContent = 'Nonno (div.nonno)';
    nonno.style.padding = '20px';
    nonno.style.background = '#e8f4fc';
    nonno.style.border = '2px solid #3498db';
    nonno.style.borderRadius = '8px';
    
    const padre = document.createElement('div');
    padre.className = 'padre';
    padre.textContent = 'Padre (div.padre)';
    padre.style.padding = '15px';
    padre.style.background = '#d4e6f1';
    padre.style.margin = '10px 0';
    padre.style.border = '2px solid #2980b9';
    padre.style.borderRadius = '6px';
    
    const figlio = document.createElement('div');
    figlio.className = 'figlio';
    figlio.textContent = 'Figlio (div.figlio)';
    figlio.style.padding = '10px';
    figlio.style.background = '#aed6f1';
    figlio.style.margin = '10px 0 0 20px';
    figlio.style.border = '2px solid #1f618d';
    figlio.style.borderRadius = '4px';
    
    // Costruisci la gerarchia
    padre.appendChild(figlio);
    nonno.appendChild(padre);
    dynamicArea.appendChild(nonno);
    
    // Aggiungi spiegazione
    const spiegazione = document.createElement('div');
    spiegazione.innerHTML = `
        <h3>Gerarchia DOM creata dinamicamente:</h3>
        <ul>
            <li><strong>div.nonno</strong> → parent di div.padre</li>
            <li><strong>div.padre</strong> → child di div.nonno, parent di div.figlio</li>
            <li><strong>div.figlio</strong> → child di div.padre, descendant di div.nonno</li>
            <li><strong>div.padre e div.figlio</strong> → sono in relazione parent/child</li>
        </ul>
    `;
    spiegazione.style.marginTop = '15px';
    dynamicArea.appendChild(spiegazione);
    
    const output = document.getElementById('navigation-output');
    output.textContent = 
        `=== CREAZIONE DINAMICA E GERARCHIA ===\n\n` +
        `Elementi creati con createElement()\n` +
        `Gerarchia costruita con appendChild()\n\n` +
        `div.nonno → div.padre → div.figlio\n\n` +
        `Ogni elemento ha relazioni familiari precise!`;
});

// Inizializzazione
aggiornaContatore();

// Aggiungi un alert per dimostrare window.alert
setTimeout(() => {
    console.log("\n=== WINDOW OBJECT DEMO ===");
    console.log("Window methods disponibili:");
    console.log("- window.alert(): mostra dialog");
    console.log("- window.confirm(): chiede conferma");
    console.log("- window.setTimeout(): timer");
    console.log("- window.document: accesso al DOM");
}, 1000);