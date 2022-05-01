const prompt = require("prompt-sync")();
let liste_carte = prompt('liste_carte: ')
liste_carte = "QA C7 PV Q10 C2"
function valeur_couleur(params) {
    switch (params) {
        case "C":
            return 100
            break;

        case "P":
            return 200
            break;

        case "Q":
            return 300
            break;

        case "T":
            return 400
            break;
    
        default:
            break;
    }
}
const piontvalu = {"2":2 ,"3":3 ,"4":4 ,"5":5 ,"6":6 ,"7":7 ,"8":8 ,"9":9 ,"1":1 ,"V":11 ,"D":12 ,"R":13 ,"A":14}
let array_carrte = liste_carte.split(" ")
array_carrte.sort((a, b) => valeur_couleur(a[0]) + piontvalu[a[1] ]- valeur_couleur(b[0]) - piontvalu[b[1]] )

console.log(array_carrte);