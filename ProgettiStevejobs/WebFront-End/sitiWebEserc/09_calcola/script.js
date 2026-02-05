const padre = document.querySelector(".box")
const figli = padre.querySelectorAll(".valore")

let somma = 0

figli.forEach(function (el) {
const numero = Number(el.textContent)
somma = somma + numero
})

console.log(somma)