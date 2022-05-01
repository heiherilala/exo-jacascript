const prompt = require("prompt-sync")();
let oui_nom = "oui"
let somme_note = 0
let moyenne_note = 0
let i = 1

while (i<=200) {
    oui_nom = prompt("voulez vous ecrire une note? (oui/nom): ")
    if ((!(oui_nom == "oui"))&&(!(oui_nom == "non")))
        {console.log("ecriver soit \"oui\" soit \" non\" ")
        continue
    }
    if (oui_nom=="oui"){  
        somme_note += +prompt("ecrivé une note ")
        i++}
    else {moyenne_note = somme_note/(i-1)
    break
    }
}
if (i>1) console.log("votre myenne est de "+moyenne_note)