const prompt = require("prompt-sync")();
let chifre = +prompt("donné un chifre: ")
let i = 1
let rest = 0
let somme_diviseur = 0
    while (i<(chifre)) {
        rest = chifre%i
        if (rest == 0) {
            somme_diviseur+=i
        }
        i++
    }
if (somme_diviseur==chifre) console.log("c'est un nombre parfait")
else console.log("ce n'est pas un nombre parfait")