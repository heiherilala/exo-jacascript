const prompt = require("prompt-sync")();
const table = +prompt("de quelle table de multiplication s'agi t'il: ")
for (let index = 1; index <= 10 ; index++) {
    console.log(table+" X "+index+" = "+(index*table))
}