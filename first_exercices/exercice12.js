const prompt = require("prompt-sync")();
const chifre_deviner = 7
for (let index = 1; index <= 3; index++) {
    let chifre = prompt("dite un chifre : ")
    if (chifre < chifre_deviner) console.log("trop bas");
    else {if (chifre > chifre_deviner) console.log("trop haut")
        else {
            console.log("c'est bien le chifre")
            break
        }
    }
    if (index == 3) console.log("desole, une prochaine fois")
    
}