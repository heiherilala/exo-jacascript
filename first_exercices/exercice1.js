const prompt = require("prompt-sync")();
let a = prompt("doné la veleur de a est: ")
let b = prompt("donné la valeur de b est: ")
if ((a % b) == 0)
    console.log(a + " est multiple de " + b)
else
    console.log(a + " n'est pas multiple de " + b)