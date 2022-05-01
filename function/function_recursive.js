const prompt = require("prompt-sync")();
let n = prompt("donné le nombre: ")
let ex = prompt("donné la puisance: ")

function puissance(numbre,exposant) {
    if (exposant == 1) 
        return numbre
    return puissance(numbre,exposant-1)*numbre
}


console.log(puissance(n,ex));