const prompt = require("prompt-sync")();
let valeur = prompt("donne la valeur de la factoriel")
let resulta = 1
let i=1
while (i<=valeur) {
    resulta *=i
    i++
}
console.log("le factoriell est ="+resulta);