const person = {
    firstName: 'Anurag',
    lastName: 'Tiwari',
    age: 25,
    occupation: 'Developer',
    address: {
        city: 'Delhi',
        state: 'Delhi',
        country: 'India'
    },
    hobbies: ['reading', 'coding', 'gaming']
}

const modify= (obj) =>{
    obj.address.city = 'Gorakhpur'
}
modify(person)
console.log(person)


const object = {
    'name' : 'Anurag'
}

const newObject = object

newObject.name = 'Anurag Tiwari'

console.log(object)
console.log(newObject)



// creating a deep copy 

let deepcopy = Object.assign([],person)
deepcopy = structuredClone(person)

console.log(deepcopy.lastName)

deepcopy.firstName = 'vishal sir'


console.log(person)
console.log(deepcopy)
