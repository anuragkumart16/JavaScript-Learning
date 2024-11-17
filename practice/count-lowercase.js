function countLowercase(string){
    const alphabet = new String('abcdefghijklmnopqtstuvwxyz')
    let count = 0
    for (let a of string){
        if(alphabet.includes(a)){
            count += 1
        }
    }
    return count
}

console.log(countLowercase('hehehehe'))