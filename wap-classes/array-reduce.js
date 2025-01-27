array = [1,2,34,5,6,7,8,9,10];
console.log(
array.reduce((accumulator,element,index)=>{
    console.log(accumulator,element,index);
    return accumulator * element;
}))

