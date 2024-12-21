const my_arr = [0,1,2,3,4,5]
const my_heros = new Array('Anurag','Iron-Man','Captain-America','Winter Soldier')

const my_value = my_arr[0]

console.log(my_value)
console.log(my_heros)


// array methods

my_heros.push(6) //appends values in array
console.log(my_heros);
my_heros.pop() //removes the last value in the array & no arguments are needed to be passed
console.log(my_heros)


my_heros.unshift('hii there') //adds the element in the front of the array but all other elements are needed to shift so no regarded as a good practice to use it.
console.log(my_heros)

my_heros.shift() //removes the first element of the array
console.log(my_heros)


const isAnurag = my_heros.includes('Anurag') //checks if something is in the array and return True or False.
console.log(isAnurag)

const indexof = my_heros.indexOf(9) //returns the index of the element passed in it and returns -1 if element doesn't exists.
console.log(indexof)

const string0fList = my_heros.join(' ') //returns a string of all the elements converted in string. the default value is comma separated but you can give string ' ' for space separeated values.
console.log(string0fList)



// slice and splice
const slicedList = my_heros.slice(0,3) //used for slicing of the list 
console.log(slicedList)


const splicedList = my_heros.splice(0,2)
console.log(splicedList)
console.log(my_heros)