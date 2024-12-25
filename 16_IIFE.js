// Sometimes there are multiple variables created in global along with multiple functions and this lead to unintentional behaviour of some elements of the code, so to keep some functions away from the global pollution we need Immediately Invoked Functions Expressions.


// syntax of the IIFE
//  (<function>)()
// the first bracket contains the definition of the function and the second bracket does the invokation of the function.


(function chai(){ //named IIFE
    console.log('DB Connected')
})();  //this function gets called automatically. here the semicolen is needed or it won't allow any other thing to happen.


( (name)=>{ //unnamed IIFE
    console.log('ANother DB CONNECTED ',name)
})('ANurag'); //this is how you pass arguments in IIFE