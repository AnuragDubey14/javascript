const accountId = 123456 
let accountEmail="abc@gmail.com"
var accountPassword = "1234567"
accountCity="Jaipur"
let accountState;

// accountId=2 not allowed to change constant variable

/*
prefer not to use var because of issue in block scope and functional scope
*/


accountEmail="ABC@gmail.com"
accountPassword="9876353"
accountCity="Gwalior"

console.table([accountEmail,accountPassword,accountCity,accountState])
console.log(accountId);
