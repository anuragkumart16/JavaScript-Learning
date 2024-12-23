function sayMYName(){
    console.log('Anurag')
}

sayMYName()
console.log(sayMYName()) //it returned undefined
console.log(sayMYName) //it returned a reference to the function.


function addtwonumbers(num1,num2){ //here we are passing parameters
    console.log(num1+num2)
}

addtwonumbers(4,5) //here we are passing the arguments 


// giving defaults
function subtracttwonumbers(num1=0,num2=0){
    return num2-num1
}

console.log(subtracttwonumbers())