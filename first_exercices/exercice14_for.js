const prompt = require("prompt-sync")();
let valeur = prompt("donne la valeur de la factoriel")
let resulta = 1
for (let i=1;i<=valeur;i++){
    resulta *=i
}
console.log("le factoriell est ="+resulta);