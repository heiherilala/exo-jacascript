const prompt = require("prompt-sync")();
let direction = prompt("donner la direction: ")
direction = ["OUEST","NORD","NORD","SUD","SUD","EST","OUEST","EST"]
function dirReduc(direction) {
    let supretionDirection = (val1,val2) => (val1=="NORD"&val2=="SUD")||(val1=="SUD"&val2=="NORD")||(val1=="EST"&val2=="OUEST")||(val1=="OUEST"&val2=="EST") ? true : false
    let i=0
    while (i < direction.length-1) {
        if (supretionDirection(direction[i] , direction[i+1])) {
            direction[i]=0
            direction[i+1]=0
            direction = direction.filter(valu => valu!=0)
            i=0
            continue
        }else i++
    }
    return direction
}

console.log(dirReduc(direction));