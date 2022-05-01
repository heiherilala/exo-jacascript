const prompt = require ("prompt-sync")();
let solde = 50000000

for (let i = 1; i<=1000; i++){
    let operation_bankair = prompt('choisisé entre 1" Versement "; 2" Retrait "; 3" Consulter solde  "; 4" Quitter " : ')
    if ((operation_bankair != 1)&&(operation_bankair != 2)&&(operation_bankair != 3)&&(operation_bankair != 4)) {
        console.log("ecriver soit 1 soit 2 soit 3 soit 4")
        continue
    }
    switch (operation_bankair) {
        case "1":
            console.log("Versement")
            break;
        case "2":
            console.log("Retrait")
            break;
        case "3":
            console.log("Consulter solde")
            break;
        case "4":
            console.log("Quitter")
            break;
        default:
            break;
    }
    if (operation_bankair==4) break
}