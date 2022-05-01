const prompt = require("prompt-sync")();
let nombre = +prompt('nombre de jeux: ')
let array_game = []
for (let i = 0; i < nombre; i++) {
    array_game[i] = +prompt("gain pert: ");
}
array_game = [1,2,5,-9,-2,-9,+5,-1,-5,5,6,8,5,-1,-5,-1,52,-10,-10]
nombre =array_game.length
let gain = 0
let accum = 0
for (let i = 0; i < nombre; i++) {
    if (array_game[i]+accum<0){
        if (array_game[i]+accum < gain) gain = array_game[i] + accum
        accum =accum+array_game[i]
    }else{accum=0}
}
console.log(gain);


let gain2=0
let accum2 = 0
for (let i = 0; i < nombre; i++) {
    if (array_game[i]<0){
        if (array_game[i]+accum2 < gain2) {
            gain2 = array_game[i] + accum2
        }
        accum2 =accum2+array_game[i]
    }else{
        accum2=0
    }
}
console.log(gain2);