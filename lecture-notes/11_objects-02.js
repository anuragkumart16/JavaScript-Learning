//how to combine two objects?
const data_1 = new Object()//you can't directly pass value in the data_1 as in python

data_1.a = 1
data_1.b = 2
data_1.c = 3
data_1.d = 4

const data_2 = {
    e:5,
    f:6,
    g:7,
    h:8
}


const finalData = {...data_1,...data_2} //using the spread method for concating two objects
console.log(finalData)

const obj3 = Object.assign({},data_1,data_2) // copies the elements from the sources given in here . we give the empty object for concating multiple objects in one object, if you won't give the empty object in the parameter then the value of data_2 and any further object elements will go in data_1 and then be returned as obj3.
console.log(obj3)



//how to get the keys of an object
console.log(Object.keys(data_1)) //this will return an array of object keys
console.log(Object.values(data_1)) //this will return an array of all values of the object
console.log(Object.entries(data_1)) //this will return an nested array of all values and keys of the objects


// to check if the object has a property
console.log(data_1.hasOwnProperty('h')) //can't directly pass the key , you need to pass the value. returns a boolean
