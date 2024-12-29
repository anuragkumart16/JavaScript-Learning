// datatype of map

// Creating a new Map
const map1 = new Map();

// Creating a Map with initial values
const map2 = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
]);

// Creating a Map from an existing object
const obj = { a: 1, b: 2 };
const map3 = new Map(Object.entries(obj));


console.log(map1)
console.log(map2)
console.log(map3)


// how to add elements in map
map1.set('name','anurag')
map1.set('name','anurag')
console.log(map1)


// differences between object and map object
const differences = {
    keyTypes: {
        object: "Keys must be strings or symbols.",
        map: "Keys can be any data type (e.g., objects, functions)."
    },
    orderOfKeys: {
        object: "No guaranteed order for properties.",
        map: "Keys are ordered by insertion order."
    },
    defaultKeys: {
        object: "May inherit properties from Object.prototype.",
        map: "Does not contain any default keys."
    },
    performance: {
        object: "Slower for frequent additions/removals.",
        map: "Optimized for frequent additions/removals."
    },
    sizeProperty: {
        object: "No direct way to get size; must count keys.",
        map: "Provides .size to get the number of entries."
    },
    iteration: {
        object: "Requires for...in or Object.keys() for iteration.",
        map: "Can be directly iterated with for...of."
    },
    useCase: {
        object: "Best for static data structures.",
        map: "Best for dynamic collections and frequent updates."
    }
};

// Methods of the Map object

// Adding elements to a Map
map1.set('age', 25);
map1.set('country', 'India');

// Getting an element from a Map
console.log(map1.get('name')); // 'anurag' , when the value is present the element is returned else you can pass an alternative , it doesn't raise an error

// Checking if a key exists in a Map
console.log(map1.has('age')); // true

// Removing an element from a Map
map1.delete('country');
console.log(map1.has('country')); // false

// Getting the size of a Map
console.log(map1.size); // 2

// Clearing all elements from a Map
map1.clear();
console.log(map1.size); // 0

// Iterating over a Map
map2.forEach((value, key) => { //first one is value and second is key
    console.log(`${key}: ${value}`);
});

// Using for...of with a Map
for (const [key, value] of map2) {
    console.log(`${key}: ${value}`);
}

// Converting a Map to an array
const map2Array = Array.from(map2);
console.log(map2Array);

// Converting a Map to an object
const map2Obj = Object.fromEntries(map2);
console.log(map2Obj);

