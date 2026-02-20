const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

console.log(display);
console.log(buttons);

let numero1 = "";
let numero2 = "";
let operatore = "";
let risultato = "";

// Funzioni matematiche
function somma(a, b) {
  return a + b;
}

function sottrai(a, b) {
  return a - b;
}

function moltiplica(a, b) {
  return a * b;
}

function dividi(a, b) {
  if (b === 0) return "Errore";
  return a / b;
}

// Funzione per aggiornare il display
function aggiornaDisplay(valore) {
  display.value = valore;
}

// Funzione per calcolare il risultato
function calcolaRisultato() {
  const n1 = parseFloat(numero1);
  const n2 = parseFloat(numero2);

  switch (operatore) {
    case "+":
      risultato = somma(n1, n2);
      break;
    case "-":
      risultato = sottrai(n1, n2);
      break;
    case "*":
      risultato = moltiplica(n1, n2);
      break;
    case "/":
      risultato = dividi(n1, n2);
      break;
    default:
      risultato = "Errore";
  }

  aggiornaDisplay(risultato);
  numero1 = risultato.toString();
  numero2 = "";
  operatore = "";
}

// Funzione per cancellare l'ultimo numero inserito
function cancellaUltimo() {
  if (!operatore) {
    numero1 = numero1.slice(0, -1);
    aggiornaDisplay(numero1);
  } else {
    numero2 = numero2.slice(0, -1);
    aggiornaDisplay(numero2);
  }
}

// Gestione dei click
buttons.forEach(button => {
  const value = button.getAttribute("data-value");
  const action = button.getAttribute("data-action");

  button.addEventListener("click", () => {
    if (value) {
      if (!operatore) {
        numero1 += value;
        aggiornaDisplay(numero1);
      } else {
        numero2 += value;
        aggiornaDisplay(numero2);
      }
    }

    if (action) {
      switch (action) {
        case "add":
          operatore = "+";
          break;
        case "subtract":
          operatore = "-";
          break;
        case "multiply":
          operatore = "*";
          break;
        case "divide":
          operatore = "/";
          break;
        case "equals":
          calcolaRisultato();
          break;
        case "clear":
          numero1 = "";
          numero2 = "";
          operatore = "";
          risultato = "";
          aggiornaDisplay("");
          break;
        case "delete":
          cancellaUltimo();
          break;
      }
    }
  });
});
