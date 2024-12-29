// if statement is used to make decisions in code
// === is used for comparing wothout typecasting

// switch case statement is used to compare multiple values with a single variable
let username = 'Anurag'
switch (username) {
    case 'Anurag':
        console.log('Hello Anurag')
        break;  //if you don't put break here then it will execute all the cases after the first match except default. which makes the code slower.

    default: //this is the default case which will be executed if no case is matched.
        console.log('Hello Stranger')
        break;
}


// logical operators

// && is and operator
// || is or operator
// ! is not operator


// falsy values in javascript
// undefined, null, 0, '', NaN, 0n, false, -0, are falsy values in javascript


// nulish coalescing operator (??): null undefined NaN
// when we call from database sometimes we get NaN or null or Undefined and in  that case our further code could give error and to prevent that form happening we have nulish coalescing operator.

const val = null ?? 0
console.log(val) //this will return 0 as the value of val.
const val2 = 0 ?? 10
console.log(val2) //this will return 0 as the value of val2.
const val3 = undefined ?? 10 ?? 20 //whichever value is not null or undefined will be returned.


// ternary operator
// syntax: condition ? true : false

const age = 20
const isAdult = age >= 18 ? 'Adult' : 'Not Adult' //if the statement is true then the first value is returned else the second value is returned.

// ternary operators are used for assigning a value not for controling the flow in loop