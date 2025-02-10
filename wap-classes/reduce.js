const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const data = numbers.reduce((acc,curr)=>{
    console.log(acc,curr);
    return acc*curr
})

console.log(data)


const nestedObject = {
    a:{
        b:{
            c:{
                d:{
                    e: "I am at the deepest level"
                }
            }
        }
    }
}

function createDeepCopy(obj){
    const copy = {}
    for (let key in obj){
        if (typeof obj[key] == 'object' && obj[key] !== null){
            copy[key] = createDeepCopy(obj[key])
        }else{
            copy[key] = obj[key]
        }
    }
    return copy
}


// function createDeepCopy(obj) {
//     const copy = {};
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             if (typeof obj[key] === 'object' && obj[key] !== null) {
//                 copy[key] = createDeepCopy(obj[key]);
//             } else {
//                 copy[key] = obj[key];
//             }
//         }
//     }
//     return copy;
// }

const newObject = createDeepCopy(nestedObject)
console.log(newObject)


