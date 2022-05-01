const prompt = require ("prompt-sync")();
let nombre = +prompt("donner le nombre de reponsse: ");
let array_yaourt = []
for (let i = 0; i < nombre; i++) {
    array_yaourt[i] = prompt("une reponse: ");
}
array_yaourt.sort()
let first_yaourt=array_yaourt[0]
let longeur_fist = 0
let second_yaourt=array_yaourt[0]
let longeur_second = 0
let j = 1
for (let i = 1; i < nombre+1; i++) {
    if (array_yaourt[i]==array_yaourt[i-1]) {
        j++
        console.log(first_yaourt);
console.log(second_yaourt);
    }else {
        if (longeur_fist<=j) {
            second_yaourt = first_yaourt;
            longeur_second =longeur_fist;
            first_yaourt = array_yaourt[i-1];
            longeur_fist = j
        } else{
            if (longeur_second<=j) {
                second_yaourt = array_yaourt[i-1];
                longeur_second = j;
            }
        }
        console.log(first_yaourt);
console.log(second_yaourt);
        j=1
    }
}

console.log(array_yaourt);
console.log(first_yaourt);
console.log(second_yaourt);