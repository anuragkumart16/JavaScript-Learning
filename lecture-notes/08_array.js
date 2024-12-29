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



// self learning

// concat - merges two or more arrays and returns a new array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = array1.concat(array2);
console.log(mergedArray);

// every - checks if all elements in an array pass a test (provided as a function)
const isBelowThreshold = (currentValue) => currentValue < 40;
const array3 = [1, 30, 39, 29, 10, 13];
console.log(array3.every(isBelowThreshold));

// filter - creates a new array with all elements that pass the test implemented by the provided function
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

// find - returns the value of the first element in the array that satisfies the provided testing function
const array4 = [5, 12, 8, 130, 44];
const found = array4.find(element => element > 10);
console.log(found);

// findIndex - returns the index of the first element in the array that satisfies the provided testing function
const array5 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array5.findIndex(isLargeNumber));

// forEach - executes a provided function once for each array element
const array6 = ['a', 'b', 'c'];
array6.forEach(element => console.log(element));

// map - creates a new array populated with the results of calling a provided function on every element in the calling array
const array7 = [1, 4, 9, 16];
const map1 = array7.map(x => x * 2);
console.log(map1);

// reduce - executes a reducer function (that you provide) on each element of the array, resulting in a single output value
const array8 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array8.reduce(reducer));

// reverse - reverses an array in place
const array9 = ['one', 'two', 'three'];
console.log(array9.reverse());

// sort - sorts the elements of an array in place and returns the array
const array10 = [1, 30, 4, 21, 100000];
console.log(array10.sort((a, b) => a - b));

// some - tests whether at least one element in the array passes the test implemented by the provided function
const array11 = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array11.some(even));

// fill - changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length)
const array12 = [1, 2, 3, 4];
console.log(array12.fill(0, 2, 4));

// flat - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
const array13 = [1, 2, [3, 4, [5, 6]]];
console.log(array13.flat(2));

// flatMap - first maps each element using a mapping function, then flattens the result into a new array
const array14 = [1, 2, 3, 4];
console.log(array14.flatMap(x => [x * 2]));

// from - creates a new, shallow-copied Array instance from an array-like or iterable object
console.log(Array.from('foo'));

// isArray - determines whether the passed value is an Array
console.log(Array.isArray([1, 2, 3]));

// of - creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments
console.log(Array.of(7, 1, 2, 3));


// Removing an element by its index
const array15 = [1, 2, 3, 4, 5];
const indexToRemove = 2;
if (indexToRemove > -1) {
    array15.splice(indexToRemove, 1);
}
console.log(array15);

// Removing an element by its value
const array16 = [1, 2, 3, 4, 5];
const valueToRemove = 3;
const index = array16.indexOf(valueToRemove);
if (index > -1) {
    array16.splice(index, 1);
}
console.log(array16);