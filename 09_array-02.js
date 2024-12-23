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

