const fs = require('fs');

// default javaScript is :-
// javaScript is a synchronous 
// javaScript is single threaded



/* 
the execution of the javascript code is 
executes one line of code at a time
each operation waits for the previous operation to complete
*/



// Blocking code:
// Blocking code is code that stops the execution of further code until the current operation completes.
// This can lead to performance issues, especially in I/O operations like reading files or making network requests.
// Example of blocking code:
const data = fs.readFileSync('/path/to/file'); // This will block the execution until the file is read completely.


// Non-blocking code:
// Non-blocking code allows the execution of further code without waiting for the current operation to complete.
// This is achieved using callbacks, promises, or async/await.
// Example of non-blocking code:
fs.readFile('/path/to/file', (err, data) => {
    if (err) throw err;
    console.log(data);
});
// The above code will not block the execution and will continue to execute further code while the file is being read.
