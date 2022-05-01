const promt =require("prompt-sync")();
let premier_nombre = +promt("la valeure du premoer nombre: ")
let deuxeme_nombre = +promt("la vaveur du deuxieme : ")
let i=0
while (premier_nombre!=deuxeme_nombre) {
    if (premier_nombre>deuxeme_nombre) premier_nombre-=deuxeme_nombre
    else deuxeme_nombre-=premier_nombre
}
console.log("le pgcd est: "+premier_nombre)