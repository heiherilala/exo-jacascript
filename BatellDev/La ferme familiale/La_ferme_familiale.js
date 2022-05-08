
export function ContestResponse(input){
    let firstWord = input[0].split("")
    let secondWord = input[1].split("")
    let nameArray = []
    for (let i = 0 ; i <= firstWord.length ; i++){
        if (secondWord[i]!=undefined){
            nameArray = [...nameArray,firstWord[i],secondWord[i]]
        }else {
            nameArray = [...nameArray,firstWord[i]]
        }
    }
    console.log(nameArray.join(""));
     return nameArray.join("")
}