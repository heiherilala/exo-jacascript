const prompt = require("prompt-sync")();
let annee = +prompt("donné la date de votre année: ")
if ((((annee % 4) == 0) && (!(annee % 100) == 0)) || (((annee % 4) == 0)&&((annee % 100) == 0)&&((annee % 400) == 0)))
    console.log ("l'année est Bisextile")
else
    console.log ("l'année n'est pas Bisextile")