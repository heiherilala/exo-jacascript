//let input =[10000, [1, "08:00-17:59"],[1, "12:23-16:27"],[4, "09:49-16:14"],[2, "11:47-13:36"],[2, "12:47-15:05"]]
let input =[5,"1 08:45-12:59","2 08:24-10:54","1 14:45-14:47","3 09:56-16:25","5 15:16-16:28"]
//let input = input.slice(1).foreath(element,key=>input[key]=input[key].split(" "))

export function scheduleMeeting(input) {

    let inputValeur =[]
    inputValeur[0]=input[0]
    for (let i = 1; i < input.length; i++) {
        inputValeur[i]=input[i].split(" ")
    }
    let stringresult
    let disponibiliti = {}
    let objectTime = {
        1 : [],
        2 : [],
        3 : [],
        4 : [],
        5 : [],
        6 : []
    }

    //------------------------- fonction qui transforme string date en nombre -------------------------------
    function stigtime(string) {
        let avecVirgule = []
        let firststring = string.split("-")
        firststring = [...firststring[0].split(":"),...firststring[1].split(":")]
        for (const key in firststring) {
            firststring[key]=parseFloat(firststring[key])
        }
        firststring.forEach((x,j,k) => {if (j%2!=0){k[j] = k[j]/100}});
        
        for (let i = 0; i <= (firststring.length/2); i=i+2) {
            avecVirgule.push(firststring[i]+firststring[i+1])
        };
        avecVirgule.forEach((x,j,k)=> k[j] = Number(x.toFixed(2)) )
        return avecVirgule
    }

    //------------------------- fonction: envele les dates d'indisponibilite sur une periode de disponobilité -------------------------------
    function diminution(bigArrayinputValeur,inputValeur) {
        let bigArray = bigArrayinputValeur
        for (let i = 0; i < bigArrayinputValeur.length; i++) {
            let array = bigArray[i]
            let array1 = []

            if ((inputValeur[1]<array[0])||(inputValeur[0]>array[1])) {
            }else if ((inputValeur[0]<=array[0])&&(inputValeur[1]>=array[1])) {
                array=[0,0]
                bigArray[i]=array
            }else {
                if (inputValeur[1]>array[0]) {
                    if (inputValeur[0]>array[0]) {
                        if ((inputValeur[0]-array[0]<1)&&(array[1]-inputValeur[1]>=1)){
                            array[0]=inputValeur[1]
                            array[1]=array[1]
                            bigArray[i]=array
                        }else if ((array[1]-inputValeur[1]<1)&&(inputValeur[0]-array[0]>=1)){
                            array[0]=array[0]
                            array[1]=inputValeur[0]
                            bigArray[i]=array
                        }else if ((array[1]-inputValeur[1]>=1)&&(inputValeur[0]-array[0]>=1)){
                            array1[0]=inputValeur[1]
                            array1[1]=array[1]
                            array[0]=array[0]
                            array[1]=inputValeur[0]
                            let ancien = []
                            ancien[0]=array
                            ancien[1]=array1
                            if (i==0) {
                                bigArray=[...ancien,...bigArray.slice(1)]
                            }
                            else if (i==bigArray.length -1) {
                                bigArray=[...bigArray.slice(0,i),...ancien]
                            }
                            else if ((i!=0)&&(i==bigArray.length -1))
                            bigArray=[...bigArray.slice(0,i),...ancien,...ancien,...bigArray.slice(i+1)]
                        }else{
                            if ((i==0)&&(i==bigArray.length-1)){
                                bigArray=[0,0]
                            }
                            else if (i==0) {
                                bigArray=[[0,0],...bigArray.slice(1)]
                            }
                            else if (i==bigArray.length -1) {
                                bigArray=[...bigArray.slice(0,i),[0,0]]
                            }
                            else if ((i!=0)&&(i==bigArray.length ))
                            bigArray=[...bigArray.slice(0,i-1),[0,0],...bigArray.slice(i+1)]
                        }
                    }else{
                        array[0]=inputValeur[1]
                        array[1]=array[1]
                        bigArray[i]=array
                    }
                }
                if (inputValeur[0]<array[1]) {
                    if (inputValeur[1]<array[1]) {
                    }else{
                        array[0]=array[0]
                        array[1]=inputValeur[0]
                        bigArray[i]=array
                    }
                }
            }
        }
        return bigArray
    }

    //------------------------- fonction:prend une date de disponibilité de 1h ou plus sur des serie de disponibilité -------------------------------
    function whenIsTheDisponibility(disponibiliti) {
        for (const key in disponibiliti) {
            if (disponibiliti[key][1]-disponibiliti[key][0]>=1) {return disponibiliti[key]}
        }
        {return [0,0]}
    }

    //------------------------- fonction:coverti une date de number en string -------------------------------
    function numberToString(string) {
        if(string[0]==8.00){
            string[0]=string[0]
            string[1]=string[0]+0.59
        }
        else {string[0]=string[0]+0.01
            if(Number.parseFloat(string[0]%1).toFixed(2)==0.60) {
                string[0]=string[0]+0.40
                string[1]=string[0]+0.59
            }
            else {string[1]=string[0]+0.99}
        }
        let number
        if ((string[0]<10)&&(string[1]<10)) {number = `0${Number.parseFloat(string[0]).toFixed(2)}-0${Number.parseFloat(string[1]).toFixed(2)}`}
        else if ((string[0]<10)&&(string[1]>=10)) {number = `0${Number.parseFloat(string[0]).toFixed(2)}-${Number.parseFloat(string[1]).toFixed(2)}`}
        else if ((string[0]>=10)&&(string[1]<10)) {number = `${Number.parseFloat(string[0]).toFixed(2)}-0${Number.parseFloat(string[1]).toFixed(2)}`}
        else {number = `${Number.parseFloat(string[0]).toFixed(2)}-${Number.parseFloat(string[1]).toFixed(2)}`}


        number=number.replace(".",":")
        number=number.replace(".",":")
        return number
    }





    inputValeur.slice(1).forEach((value,index)=>{
        objectTime[value[0].toString()]=[...objectTime[value[0].toString()],value[1]]
    })

    let newobject = {}
    for (const key in objectTime) {
        if (objectTime[key][0]!=null) {
            newobject[key] = objectTime[key]
        }
    }
    objectTime=newobject

    for (const key in objectTime) {
        objectTime[key].forEach((value,ind) => {
            objectTime[key][ind]=stigtime(objectTime[key][ind])
        })
    }


    for(const key in objectTime){
        disponibiliti[key]=[[8.00,17.59]]
    }

    for(const key in disponibiliti) {
        for (const key2 in objectTime[key]) {
            disponibiliti[key] = diminution(disponibiliti[key],objectTime[key][key2])
        }
    }

    for(const key in disponibiliti) {
        disponibiliti[key] = whenIsTheDisponibility(disponibiliti[key])
        if (disponibiliti[key][1]-disponibiliti[key][0]>=1){
            disponibiliti[key] = numberToString(disponibiliti[key])
            let a = key.toString()
            let b = disponibiliti[key].toString()
            stringresult = a + " " + b
            return stringresult;
            break
        }
    }
}

scheduleMeeting(input)



