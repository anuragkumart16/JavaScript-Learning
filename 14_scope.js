//we will try to understand scope using if block


if (true){  //what should ideally happen is that if a variable is defined inside a scope (scope is denoted as {}) then it shouldn't be accssible outside the scope, and that applies on let, and const defined variables but not with var defined variables.
    let a = 1
    const b = 2
    var c = 3
}
 
// console.log(a) //you will get a error saying that a is not defined.
// console.log(b) //you will get an error saying that b is not defined.
// console.log(c) //here you will get the output of c 


// the globally defined variable is not accessible inside of the block scope and vice versa.
// consider an example

let globalVar = 1
if (true){
    let globalVar = 2
    console.log('inner:',globalVar)
}
console.log(globalVar)

