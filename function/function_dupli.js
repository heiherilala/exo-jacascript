function hasDuplicate(array){
    for (let y = 0; (y < array.length-1); y++) {
        for (i = y+1; i < array.length; i++) {
            if (array[y]==array[i]) {
                return true
            }
        }
    }
    return false
}
console.log(hasDuplicate([1,2,3,2,5]))