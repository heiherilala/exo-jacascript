const prompt = require("prompt-sync")();
const mot_de_pass = "lalarihe"
let mot = 0
for (let index = 1; index <=3 ; index++) {
    mot = prompt("quelle est le mot de passe: ")
    if (mot==mot_de_pass){
        console.log("bravo")
        break
    }else 
    {if (index<3) console.log("il ne vous reste que "+(3-index)+" essei")
    else console.log("vous ne pouver plus esseier")
    }
}
