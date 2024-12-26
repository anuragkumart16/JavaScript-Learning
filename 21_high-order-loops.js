// for of loop


// for of loop in array
const statesInIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
]
for (const state of statesInIndia) {  //this loop directly gives values of the array or objects
    // console.log(state)
}


// for of loop in object
const stateCapitals = {
    "Andhra Pradesh": "Amaravati",
    "Arunachal Pradesh": "Itanagar",
    "Assam": "Dispur",
    "Bihar": "Patna",
    "Chhattisgarh": "Raipur",
    "Goa": "Panaji",
    "Gujarat": "Gandhinagar",
    "Haryana": "Chandigarh",
    "Himachal Pradesh": "Shimla",
    "Jharkhand": "Ranchi",
    "Karnataka": "Bengaluru",
    "Kerala": "Thiruvananthapuram",
    "Madhya Pradesh": "Bhopal",
    "Maharashtra": "Mumbai",
    "Manipur": "Imphal",
    "Meghalaya": "Shillong",
    "Mizoram": "Aizawl",
    "Nagaland": "Kohima",
    "Odisha": "Bhubaneswar",
    "Punjab": "Chandigarh",
    "Rajasthan": "Jaipur",
    "Sikkim": "Gangtok",
    "Tamil Nadu": "Chennai",
    "Telangana": "Hyderabad",
    "Tripura": "Agartala",
    "Uttar Pradesh": "Lucknow",
    "Uttarakhand": "Dehradun",
    "West Bengal": "Kolkata"
};

for (const stateCapital of Object.entries(stateCapitals)){  //method for arrays, which can't be used directly on objects
    // console.log(`The capital of ${stateCapital[0]} is ${stateCapital[1]}.`)
}

for (const [key,value] of Object.entries(stateCapitals)){
    // console.log(`the capital of ${key} is ${value}`)  //this works too
}

// we could convert the object in map
const my_map = new Map(Object.entries(stateCapitals))
// console.log(my_map);
for (const [key,value] of my_map){
    // console.log(key,value)
}


// for of loop in string

const string = new String('Anurag')
for (const char of string){
    // console.log(char)
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for in loop

for (const key in stateCapitals){
    // console.log(`${key}, ${stateCapitals[key]}`)
}

// map object is not iterable via for in loop
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const items = ["apple", "banana", "cherry", "date", "elderberry"];
items.forEach(function(element){ //this is a callback and hence has no name
    console.log(element)
})

items.forEach((element,indexedDB,list)=>{ //this returns index,list and index values 
    console.log(element,indexedDB,list);
    
})