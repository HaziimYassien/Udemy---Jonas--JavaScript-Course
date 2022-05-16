//using strict mode :
// to activate it just write
"use strict"
//at the beginning of the line

//so strict mode prevents us from having more bugs in our code
//because if forbids us from doing certain things
//and it will create visible errors for us

//example :
let hasDriversLicense = false
const passTest = true

if (passTest) hasDriverLicense = true
    //so if we don't have strict mode activated we will note receive an error message regarding hasDriverLicense
if (hasDriversLicense) console.log("I can drive now :")

//another thing that strict mode helps with is the variable naming
//it prevents us from using reserved words like let, const, var
//and it prevents us from using variables with names that are not valid JS identifiers