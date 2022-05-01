function aficher_nombre_pair(params) {
    let arr=[];
    for (let i = 0; i < params.length; i++) {
        if (params[i]%2==0){arr.push(params[i])};  
    }
    return arr
}

function summe_array(n) {
    let result = 0
    for (let i = 0; i< n.length; i++){
        result += n[i]
    }
    return result
}

function carre_array(n) {
    let arr = []
    n.forEach(function(number) {//pour tout les valeur et index du tableau faire cette function
        arr.push(number**2)
    });
    return arr
}


console.log(aficher_nombre_pair([1,85,6,8])); 
console.log(summe_array([1,85,6,8]));
console.log(carre_array([1,85,6,8]));