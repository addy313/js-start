const accountId = 111111
let accountEmail = "addy313@gmail.com"
var accountPassword = "123456"
accountCity = "goa"
let accountState;

// accountId =222222 // not allowed 

accountEmail = "adnan313@gmail.com"
accountPassword = "654321"
accountCity = "kashmir"

console.log(accountId);

/*
Prefer not use to war
beceause of issue in block scope and functional scope

*/

console.table ([accountId, accountEmail, accountPassword, accountCity, accountState])