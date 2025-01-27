const myArray = [1, 2, 3, 'four', 'five', 6, 7, 'eight', 9, 10];
console.log(myArray);

function square(element ,index){
    return element * element;
}

const squaredArray = myArray.map(square);
console.log(squaredArray.filter(element => isNaN(element) == false))

const element = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(element.map((element,index)=>{
    if (element%2==0){
        return 'Even'
    }else{
        return 'Odd'
    }
}))




