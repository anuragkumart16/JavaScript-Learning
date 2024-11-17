// Write a program that takes in a string and prints a new string with all vowels removed.
// (Vowels : aeiouAEIOU)

function removeVowels(string){
    let newString = new String('')
    const vowels = new String('aeiouAEIOU')
    for (let a of string){
        if (vowels.includes(a)){
            continue
        }else{
            newString += a
        }
    }
    return newString
}

console.log(removeVowels('helloworld'))