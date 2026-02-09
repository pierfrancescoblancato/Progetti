// 1. Selezione del bottone "ADD MOVIE" tramite la classe CSS ".apri"
const addMovieBtn = document.querySelector(".apri");

// 2. Selezione della modale di aggiunta film tramite il suo ID "add-modal"
const addModal = document.getElementById("add-modal");

// 3. Selezione dello sfondo oscurato (backdrop) tramite il suo ID "backdrop"
const backdrop = document.getElementById("backdrop");

// 4. Selezione del bottone "Cancel" dentro la modale di aggiunta
//    usa querySelector sul contenuto già selezionato di addModal
const cancelBtn = addModal.querySelector(".btn--passive");

bodyColor = document.querySelector('body')
const successBtn = document.querySelector(".btn--success")
// 5. Aggiunta degli event listener (ascoltatori di eventi)
// Quando si clicca sul bottone "ADD MOVIE", esegui la funzione apriModale
addMovieBtn.addEventListener("click", apriModale);

// Quando si clicca sul bottone "Cancel", esegui la funzione chiudiModale
cancelBtn.addEventListener("click", chiudiModale);

// Quando si clicca sul backdrop (sfondo oscurato), esegui la funzione chiudiModale
backdrop.addEventListener("click", chiudiModale);

successBtn.addEventListener("click", backgroundColor);

// 6. Funzione per APRIRE la modale
function apriModale() {
    // Aggiunge la classe "visible" alla modale per renderla visibile
    addModal.classList.add("visible") ;
    // Aggiunge la classe "visible" al backdrop per renderlo visibile
    backdrop.classList.add("visible") ;
}

// 7. Funzione per CHIUDERE la modale
function chiudiModale() {
    // Rimuove la classe "visible" dalla modale per nasconderla
    addModal.classList.remove("visible");
    
    // Rimuove la classe "visible" dal backdrop per nasconderlo
    backdrop.classList.remove("visible");
}

// 8. Funzione per chiudere la modale cliccando sullo sfondo
//    (ATTENZIONE: questa funzione non viene mai usata nel tuo codice!)
function closeModalByBackGround(){
    // Stessa logica della funzione chiudiModale()
    addModal.classList.remove("visible");
    backdrop.classList.remove("visible");
}

function backgroundColor(){
    bodyColor.style.backgroundColor = 'red';
}
