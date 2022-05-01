const prompt = require("prompt-sync")();
let chifre = +prompt("donné un chifre: ")
let i = 2
let rest = 1
    while (i<(chifre)) {
        rest = chifre%i
        if (rest == 0) {
            console.log("ce n'est pas un nombre premier")
            break
        }
        i++
    }
if (!rest==0) console.log("c'est un nombre premier")