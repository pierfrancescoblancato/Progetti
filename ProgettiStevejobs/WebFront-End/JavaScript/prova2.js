// Mini Calcolatrice
const calc = {
    add: (a,b) => a+b,
    sub: (a,b) => a-b,
    mul: (a,b) => a*b,
    div: (a,b) => b!==0 ? a/b : 'Errore'
};

// Esempi uso
console.log(calc.add(5,3));     // 8
console.log(calc.sub(10,4));    // 6  
console.log(calc.mul(3,7));     // 21
console.log(calc.div(20,5));    // 4
console.log(calc.div(5,0));     // Errore