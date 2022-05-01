const prompt = require("prompt-sync")();
let nombre_mot = prompt("donné le nombre de mot a saisir: ")
let mot_plus_long = "0"
for (let i = 1; i <= nombre_mot; i++) {
    let nouveau_mot = prompt("ecriver le mot N"+i+": ")
    if (mot_plus_long.length <= nouveau_mot.length) {
        mot_plus_long = nouveau_mot
    }  
}
console.log("le mot le plus long est: "+mot_plus_long)