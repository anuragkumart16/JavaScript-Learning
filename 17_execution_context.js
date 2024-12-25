//the execution context is the environment in which the JavaScript code is executed.

// whenever the javascript code is runned , system creates Global execution context 
// * all the data about code environment is stored in this keyword.
// * the in memory creation happens for all variables and functions. all the variables are assigned undefined as values.
// * then in execution phase the values are assigned to the variables.

// whenever a function is called a new execution context is created which is called functional execution context.
// * the memory creation phase is runned again assigning undefined to all the variables
// * then the values are assigned to the variables in the execution phase.
// * when return is encountered the function execution context is popped out and the value is returned to the calling funtion clearing all the memory created for the function.