const prompt = require("prompt-sync")();
const nombre = +prompt("donner le nombre de chifre: ")
let result = []
for (let i = 0; i < nombre; i++) {
    result[i]=+prompt("un chifre: ");
}
let j=1
let repetition_max = 1
for (let i = 0; i < nombre; i++) {
    if (result[i]==result[i+1]) j++
    else {
        if (repetition_max<j) repetition_max=j
        j=1
    }
}
console.log(repetition_max);