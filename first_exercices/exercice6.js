const prompt = require("prompt-sync")();

let a = +prompt("donné la valeur de a pour l\'equation \"ax2+bx+c=0\": ")
let b = +prompt("donné la valeur de b pour l\'equation \"ax2+bx+c=0\": ")
let c = +prompt("donné la valeur de c pour l\'equation \"ax2+bx+c=0\": ")
if (a==0) console.log("le valeur de x est"+(-c/b) )
else{
    let delta = b*b-4*a*c
    if (delta<0) console.log("cette eqation n'a pas de valeur reelle")
    else {
        if (delta==0) console.log("le solution unique est x = "+(-b/(2*a)))
        else console.log('la premieur valeur est x1 = '+ (-(b-Math.sqrt(delta))/(2*a)) +" la deuxeme valeure est x2 = "+(-(b+Math.sqrt(delta))/(2*a)))
    }
}