// let array = [1,2,3,4,5,6,7]

// // let newArray = new Map(array)

// // console.log(newArray)


// // console.log(Math.max(array)) //does-not accept array value so we need to use rest operator
// console.log(Math.max(...array)) 
// array.sort((a,b)=>b-a)

// newArray = [78,80,27349]

// array.concat(newArray)
// console.log(array.concat(newArray))



// rest operator

( (...value) =>{
    output = 0
    for (element of value){
        parseInt(element)
        output += element
    }
    console.log(output)
})(1,2,3,4,5,6,7,8,6,5,3,2,2,3,4,4,35,5,3,2,2,1,4,5,5,33,5,3,4,24)





