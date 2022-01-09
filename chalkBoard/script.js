// //137. closures

//a closure is a function that has access to the parent scope, even after the parent function has closed
//like a family member who didn't lose connection to his family and their variables

//for example:

const myName = "hazem";

function printName() {
    console.log(myName);
}

printName() //result will be hazem

//so every function has access to the parent scope
//and ins this function the parent scope is the main scope which has myName variable

//another example:
var addTo = function(passed) {
    var inner = 2;
    return passed + inner;
}
console.log(addTo(3)); //5

//so in here you can define a variable called inner and it will be accessible in the function
//so in this case the inner variable is 2

var passed = 2;
var addTo = function() {
    var inner = 3;
    return passed + inner;
}
console.log(addTo()); //5

//another example :

//closure function
function makeAdder(a) {
    return function(b) {
        return a + b;
    }
}
//this is a simple example of a closure function