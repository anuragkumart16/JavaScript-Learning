const name = 'Anurag' // its datatype is string but its a old method and hence is being shown with a strike through
const repoCount = 15 

console.log('I am',name,'and I have',String(repoCount), 'repositories.') //this is the old method

console.log(`I am ${name} and I have ${repoCount} repositories.`) //this is the new method, this method is prefered due to its ease in reading.

// there is also a way to create string
const anotherName = new String('Anurag') //its datatype is object and it provide various method.

// console.log(typeof name) //this will return a string
// console.log(typeof anotherName) //this will return a object

// console.log(name[0]) //accessing the content at a particular index.
// console.log(name.__proto__)
// console.log(anotherName[0]) //accessing the content at a particular index.
// console.log(anotherName.length)
// console.log(anotherName.toUpperCase())
// console.log(anotherName.charAt(3)) //pass index it will give what Character is on that index
console.log(anotherName.indexOf('n'))
// console.log(name)

// strings are most powerful in any language


function checkPangram(string){
    const alphabet = new String('abcdefghijklmnopqrstuvwxyz')
    string = string.toLowerCase()
    for (let element of alphabet){
        if (string.includes(element)){
            continue
        }else{
            return false
        }
    }
}

function countSubtring(string,substring){
    let list = string.split(substring)
    console.log(list)
    let count = list.length - 1
    return count
}

console.log(countSubtring("JavaScript is beautiful isn't it",'is'))
