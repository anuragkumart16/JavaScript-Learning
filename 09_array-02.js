const marvel_heros = ['thor','Ironman','Spiderman']
const dc_heros = ['Superman','Flash','Batman']

marvel_heros.push(dc_heros) //creates a nested array
console.log(marvel_heros)
marvel_heros.pop()

const newList = marvel_heros.concat(dc_heros) //this method returns a new array without modifying the inital array hence always do it in a variable, also we can pass only on value for concating
console.log(newList) //concat the list together 


// learning to do the concat with spread
console.log(...marvel_heros) //give collection of strings in a single line
const allHeroList = [...marvel_heros,...dc_heros] //list comprihension type of thing . here we can overcome the limitation of concat and add multiple list together
console.log(allHeroList)



// learning flat method
my_list = [1,2,4,[5,6,7],[89,[89]]]
console.log(my_list.flat(2))  //make the nested list into main list making every thing flat and also you need to pass till how many depth you want to flat the list.
console.log(my_list.flat(Infinity)) //this figure outs by itself


//to check if a object is array 
console.log(Array.isArray(my_list))
console.log(Array.from('ANurag')) //breaks the string in the list 
console.log(Array.from({name:'ANurag'})) //it will give an empty array till we specifgy what values we need keys or values
 
const list1= [1,2,4,5]
const list2= [1,2,4,5]
const list3= [1,2,4,5]


console.log(Array.of(list1,list2,list3)) //creates array with the elements passed in the of



// map method
const numbers = [1, 2, 3, 4, 5];
let updated_number = numbers.map(element =>{  //if you don't return you will get an array with undefined elements
    return element+10
})
console.log(updated_number);


// chaining with map and filter

updated_number = numbers.map(element=> element+10).filter(element=> element==15)
console.log(updated_number);


// reduce method
/* consider that you are creating a shopping cart funtionality where you have a list of items prices and now you have to add them all for final result*/

const item_prices = [100, 200, 300, 400, 500];
const total_price = item_prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total_price);


const courses = [
    {
        name: 'Introduction to Computer Science',
        price: 100,
        timeToComplete: '10 weeks'
    },
    {
        name: 'Data Structures and Algorithms',
        price: 150,
        timeToComplete: '12 weeks'
    },
    {
        name: 'Web Development',
        price: 200,
        timeToComplete: '8 weeks'
    },
    {
        name: 'Database Management Systems',
        price: 120,
        timeToComplete: '6 weeks'
    },
    {
        name: 'Operating Systems',
        price: 130,
        timeToComplete: '7 weeks'
    }
];

const final_value = courses.reduce( (acc,item)=> acc + item.price,0)
console.log(final_value);

// what happens is that the init value of acc is = 0( we set it) then the item.price is added to the acc with each iteration and in the end the acc value is returned.