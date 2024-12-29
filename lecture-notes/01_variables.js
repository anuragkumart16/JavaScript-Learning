const accountID = 156382
let accountEmail = 'anurag@gmail.com'
var accountPassword = 'hehe'  /* this is a depriciated way as it has scope problems in both functional and block scope */
accountCity = 'Gorakhpur' //this also creates a variable but is not recommended way
let accountState //this creates a variable named accountState its value is called 'Undefined'

// accountID = 2
console.log(accountID); //gives TypeError Saying Assignment to Constant Varibale

accountEmail = 'Anurag@google.com' // the value of the variable got reassigned
console.log(accountEmail)

accountPassword = 'hehe01'
accountCity = 'Delhi'


console.table([accountID,accountEmail,accountPassword,accountCity,accountState])