// // for loop

// for (let i = 0; i<11; i++){ //here semicolon is important don't miss it.
//     console.log(i)
// }
// /* here first a variable is defined , then a coditiion is checked , then the items written in the block scope is executed , the value of i is updated */

// // lets create a array 
// const  array = ['Anurag','Kumar','Tiwari']

// for( let index = 0; index<array.length; index++){
//     console.log(array[index])
// }
// console.log(array.length)


// // create an object
// const person = {
//     firstName: 'Anurag',
//     lastName: 'Tiwari',
//     age: 25,
//     occupation: 'Developer'
// };

// // log the elements of the object using a loop
// for (let objectelementKEy in person) {   //this gives objectelementKEy of the object
//     console.log(`${objectelementKEy}: ${person[objectelementKEy]}`);  
// }


// for (let key in person){
//     console.log(key)
// }



// storing 10 multiples of given number in an array
function tables(num){
    // defining an array
    let array = new Array()
    // loop
    for (let i=1; i<11;i++){
        array.push(i*num)
    }
    return array
}

const table = tables(2)
table.forEach((element) =>{  //forEach doesn't support break, when there is a case of break you need to use normal loop
    // console.log(element)
})

for (let index in table){
    if(table[index]===18){
        console.log('18 was found');
        continue
    }
    console.log(table[index])
}