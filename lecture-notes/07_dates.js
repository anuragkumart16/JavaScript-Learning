const myDate = new Date()
console.log(typeof(myDate));
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())


let examDate = new Date(2024,11,13,16,4) //months starts form 0 here in javaScript
console.log(examDate.toLocaleString());


let pspdate = new Date('2024-04-06') //mm-dd-yyyy
console.log(pspdate.toLocaleString());

// timestamps

const timestamps = Date.now() //returns the mili-seconds passed  from the reference time
console.log(timestamps)
console.log(pspdate.getTime()) 

// now we can easily compare them and do our operations


let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);
console.log(newDate.getHours()%12);
console.log(newDate.getFullYear());
console.log(newDate.getDay());


console.log(newDate.toLocaleString('default',{
    weekday: "long",
}))

