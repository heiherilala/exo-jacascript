const prompt = require("prompt-sync")();
const message = prompt("votre phrase: ");
let newmm = ""
for (let i = 0; i < message.length ; i+=1) {i%2 == 0 ? newmm = newmm + message[i].toLocaleUpperCase() : newmm = newmm + message[i]}
console.log(newmm);