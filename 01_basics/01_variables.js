const accountId = 144553
let accountEmail = "vennela@gmai.com"
var accountPassword = "12345"
accountCity = "Gunupur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "ve@gmai.com"
accountPassword = "212121"
accountCity = "gun"

console.log(accountId);


/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])