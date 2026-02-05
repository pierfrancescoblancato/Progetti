var array = [10, 15, 13, 14, 25]; 
var sum = 0;

for(var i = 0; i<array.length; i++){
    console.log("il costo delle pizza è: " + array[i]);
    sum += array[i];

}
console.log("il costo totale delle pizze è: " + sum);
console.log("il costo medio delle pizze è: " + sum/array.length);


