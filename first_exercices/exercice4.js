const lire = require("prompt-sync")();
let a = Number(lire("la valeur de a: "))//alt+shift+fleche bas
let b = +lire("la valeur de b: ")//le mot number () ou + est pour dire que c'est un chifre
if ((a<0 && b<0) || (a>0 && b>0)){
    console.log("positif")
}else {if (a==0 || b==0) {
        console.log("nul")
    } else console.log("negatif")
}