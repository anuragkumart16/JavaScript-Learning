const course = new Object()

course.name = 'Js in Hindi'
course.price = '999'
course.course_instructor = 'Hitesh'

//in long code when we need to use the very often it becomes bulky to write the complete course.course_instructor and hence we can do the following

const {course_instructor} = course //this creates a variable with name course_instructor which stores the value of course_instructure form the course object literals.

console.log(course_instructor)


// if you feel like that course_instructor is still a big name to write you can try:
const {course_instructor : instructor} = course
console.log(instructor)




// JSON 
{
    'course':'JS in hindi',
    'Name':'ANurag'
}