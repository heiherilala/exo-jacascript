const prompt = require ("prompt-sync")();
let entier = prompt ("donné le nombre entier: ")
let exposant = prompt ("donne l'expsant ")
let reponse = 1
let i=1
while(i<=exposant) {
    i++
    reponse*=entier
}
console.log("la reponse est"+reponse);