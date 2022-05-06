
let input =[5,[1, "08:45-12:59"],[2, "08:24-10:54"],[1, "14:45-14:47"],[3, "09:56-16:25"],[5, "15:16-16:28"]]
export function scheduleMeeting(input) {
let objectTime = {
    1 : [],
    2 : [],
    3 : [],
    4 : [],
    5 : [],
    6 : []
}

function stigtime(string) {
    //let firststring = string.replaceAll(":",".")
    let firststring = string.split("-")
    firststring = [...firststring[0].split(":"),...firststring[1].split(":")]
    for (const key in firststring) {
        firststring[key]=parseFloat(firststring[key])
    }
    return firststring
}

input.slice(1).forEach((value,index)=>{
    objectTime[value[0].toString()]=[...objectTime[value[0].toString()],value[1]]
})
console.log(stigtime("08:45-12:59"))
for (const key in objectTime) {
    //objectTime[key]=stigtime(objectTime[key])
    if (objectTime[key]!=[]) {
        console.log(objectTime[key]);
    }
        
}
console.log(objectTime);





}
scheduleMeeting(input)