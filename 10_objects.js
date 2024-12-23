// How to declare an object literal
const my_object = new Object()
console.log(my_object)
const my_symbol = Symbol('hehe') //defing a symbol
const js_user = {
    name: 'Anurag',  // keys are stored as strings, here you are giving it as a variable but the system converts it to a string.
    age: 20,
    email: 'anuragkumartiwari12@gmail.com',
    location: 'Gorakhpur',
    isloggedIn: false,
    lastLoggedDays: ['Monday','Tuesday','Wednesday'],
    'full name': 'Anurag Kumar Tiwari', //also while passing the key which has space in it needed to given as string
    [my_symbol]:'hehehehe1' //the correct way to use symbols
}

// accessing the object elements 

console.log(js_user.name) // dot notation
console.log(js_user['name']) // bracket notation. in here you need to pass the key as a string

// There is no way to use the dot notation when the key name has space in it, and then the bracket notation will only work.
//also in javascript you can pass a comment using ''' or """ but it will not be considered as a comment and will be considered as a string.
console.log(js_user['full name'])
 
//declaring the symbol as key for a object literal
// view the first line 
console.log(typeof js_user[my_symbol]) //this is returning a string ,when we need to use key as symbol we need to pass it in sqaure brackets.

// changing value of keys in object literals

js_user.email = 'anurag@google.com'
console.log(js_user.email)


//freezing the object literal so that no one could modify the values 
// Object.freeze(js_user) // now whenever you will try to change the object values it won't raise an error but also the changes won't propagate.

console.log(js_user)

// we can also store a funtion in the object 
js_user.greetings = function(){
    return `Hello I am ${this.name}` //this here refers to the js_user
}
console.log(js_user.greetings()) //don't forget to give pranthesis or it will show the reference of the function
console.log(js_user.greetings) 
console.log(js_user.greetings())

