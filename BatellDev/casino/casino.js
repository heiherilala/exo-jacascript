
let input = [5,"-13","2","-15","-5","14"] //-31

    export function ContestResponse(input){
        let arrayGame =input.slice(1)
        for(const key in arrayGame){
            arrayGame[key]=parseFloat(arrayGame[key])
        }
    const nombre = arrayGame.length
    let gain = 0
    let accum = 0
    for (let i = 0; i < nombre; i++) {
        if (arrayGame[i]+accum<0){
            accum =accum+arrayGame[i]
            if (accum < gain) {gain = accum}
        }else{accum=0}
    }
    return gain 
        //implement your code here using input array
    }

ContestResponse(input)
