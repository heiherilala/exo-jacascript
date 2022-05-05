export function spongeMeme(message) {
let newmm = ""
for (let i = 0; i < message.length ; i+=1) {i%2 == 0 ? newmm = newmm + message[i].toUpperCase() : newmm = newmm + message[i].toLowerCase()}

return newmm;  
}

console.log(spongeMeme("stop Making spongebob Memes!"));