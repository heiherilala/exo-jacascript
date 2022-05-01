const prompt = require("prompt-sync")();
let valeur = prompt("donne la valeur de la factoriel")
let resulta = 1
let i=1
do {
    resulta *=i
    i++
} while (i<=valeur);
console.log("le factoriell est ="+resulta);