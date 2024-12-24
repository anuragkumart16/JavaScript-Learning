const my_object = new Object()

my_object.username = 'Anurag'
my_object.website = 'anuragkumart16.github.io'
my_object.greet = function(){
    console.log(`hello ${this.username}`)
    console.log(this)
}

my_object.greet()
my_object.username = 'rutba'
my_object.greet()
console.log(this) // when you are in a node environment the this keyword returns a blank object
// when the same line is given in the browser in the window of browser it returns a window.



function chai(){
    let hehe = 'Anurag'
    console.log(this) //this gives all the items of the funtion which you could see
    console.log(this.hehe) //this gives undefined , as this is usable for objects not functions.
}
chai()


// arrow functions
// ( ) => {}

const my_function = () =>{
    let hehe = 'Anurag'
    console.log(this.hehe)
}
my_function()


const addtwonums = (num1,num2) =>{ //explicit return function
    return num1+num2
}
console.log(addtwonums(1,4))


// implicit return 

const my_implicit_function = (num1,num2) => num1 + num2 //no need of return in implicit functions
console.log(my_implicit_function(1,3)) 


// if you want to return a object using implicit return method you need to wrap that in a pathenthesis

const another = (name) => ({name : name})
console.log(another('Anurag'));
