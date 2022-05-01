const prompt = require("prompt-sync")();
let heur = +prompt("donner l'heure: ")
let min = +prompt("donner la minute: ")
if (min == 59) {
    heur +=1
    min ="00"
}else
    min +=1
if (heur==24)
    heur = "00"
console.log("l\'heur actuelle est de "+heur+":"+min)