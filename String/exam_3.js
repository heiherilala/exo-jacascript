const prompt = require("prompt-sync")();
let saisie = prompt("donné votr mot: ")
let longeur = saisie.length
let dernier_nombre = saisie[longeur-1]
let avan_dernier_nombre = saisie[saisie.length-2]
if (dernier_nombre == "r"){ 
    if (avan_dernier_nombre=="e") {
        console.log("c'est au premier groupe")
    }else {if (avan_dernier_nombre=="i") {
                console.log("c'est au deuxieme groupe")
        }else console.log("autre")}
} else console.log("autre")
