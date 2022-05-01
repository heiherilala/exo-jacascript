const prompt = require("prompt-sync")();
const number = +prompt("le nombre de mot: ")
let dictionair = []
for (let i = 0; i < number; i++) {
    dictionair[i]=prompt('un mot: ');
}
dictionair.sort((a, b) => a.length - b.length)
console.log(dictionair[number-1]);