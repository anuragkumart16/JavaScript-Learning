const nums = 400 //creates a number datatype by detecting
const balance = new Number(400.5) // creates a number dataype and this time its guarnteed to be a number because you are passing it

console.log(nums)
console.log(balance) //this also returns the datatype because it was explicitly passed.


console.log(balance.toString(),typeof(balance.toString())) //converts it to string
console.log(balance.toFixed(2)) //returns a string and also rounds the value to the given decimal points


const indian_string = new Number(1000000)
console.log(indian_string.toLocaleString('en-IN')) //returns string which has commas embedded in it according to number system which is passed.


//+++++++++++++++++++++++++++++++++++++++++++ Maths +=================================================

console.log(Math) //returns a object try it dev-console

console.log(Math.abs(-34)) //returns the absolute value
console.log(Math.round(34.5)) //here you can't give how many digits you want to round
console.log(Math.ceil(4.2))
console.log(Math.floor(4.8))


console.log(Math.min(1,2,3,4,5))
console.log(Math.max(1,2,3,4,5))

console.log(Math.random()) //returns a random number in between 0 and 1
console.log((Math.random()*10)+1) //returns a random floating-number between 1 to 10
console.log(Math.floor((Math.random()*10))+1) //returns a random number 


// formula to get a random number between a range
const min = 5
const max = 9

const output = Math.floor((Math.random()*(max-min+1)+min))
console.log(output);

