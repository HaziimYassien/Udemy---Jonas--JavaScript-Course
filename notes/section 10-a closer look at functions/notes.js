// /// 128. default parameters : 
//I have no idea what is default parameters meaning but this the old way of setting default parameters

const bookings = [];

const createBooking = function(flightNum, numPassengers, price) {
    //we are setting a default value in case the user didn't add the passengers number
    numPassengers = numPassengers || 1
    flightNum = flightNum || "N/A"
    price = price || 200
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking)
    bookings.push(booking)
}

createBooking("NWH1098", "200", "2000usd/passenger")
createBooking()

//this is the es6 new way of making default values in a function 
const bookings = [];
//this is the new way of setting default parameters
const createBooking = function(flightNum = "CAI1001", numPassengers = "0", price = "100") {
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking)
    bookings.push(booking)
}

createBooking("NWH1098", "200", "2000usd/passenger")
createBooking()

// // 129. how passing arguments works 
//I have no idea what is he talking about 
//when you are passing a primitive like a number the value is only copied not the object 
//passing an object to a function will copy the object and any change in the copy will affect the object 
//and that's it really that's the hall lecture

//there are two terms : 
//1. passing by value 
//2. passiing by refrence 
//javascript only has passing by value 
const createBooking = function(
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
) {
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
}


// //130. first-class and higher-order functions : 
//javascript treats functions as values so we can store them in variables 
//so for example : 
//this is a function :
const add = (a, b) => a + b;
//higher order functions area functions that receive other function as an argument and returns a totally new function 
//so for example : 
const sujood = (bodyPart) => { console.log(`${bodyPart} is making sujood`) }
const prayer = (sujood)
prayer()
    //higher order functions can also return other function
    //example: 
const back = 'back'
const sujood = (bodyPart) => { console.log(`${bodyPart} is making sujood`) }
const prayer = (sujood)
sujood(back)
prayer()


// // 131. functions accepting callback functions 
//so let's write a function that replaces words in a sentance : 
const oneWord = function(str) {
        return str.replace(/ /g /*this will choose all the spaces i the string*/ , '').toUpperCase()
    }
    //let's create a second function 
    //this function will transform the first word of the string to upper case 
const upperFirstWord = function(str) {
    //dividing the input to first and others
    const [first, ...otherWords] = str.split(' ')
        //returning the two seperated lines and joining them together
    return [first.toUpperCase(), ...otherWords].join(' ')
}

console.log(upperFirstWord('hazem magdy el sayed yassien'))
console.log(upperFirstWord('hazem'))
    //so those two functions 1.oneWord and 2.upperFirstWord are the two functions that we will add to another function

//now let's make a higher order function which will take the two function from above which are 1.oneWord and 2.upperFirstWord
const transformer = function(str, fn /*this function will a second function as an argument */ ) {
    //so this the original text 
    console.log(`original string: ${str}`)
        //and this is the one that will happen after the transfer 
        //so it all depends on what we will define the fn like which function will we choose 
    console.log(`transformed string: ${fn(str)}`)
}

//so let's define this fn as oneWord
//and while executing we will only pass in the function value not the function itself like this :
transformer('javaScript is awesome', oneWord)
transformer('JavaScript is awesome', upperFirstWord)

//let's create another simple function from scratsh
const printHello = function() {
    console.log('HELOOOWWWW')
}
document.querySelector('#btn').addEventListener('click', printHello)

//now you can pass in written function into built in function like forEach() so for example: 
['Hazem', 'Magdy', 'El Syaed', "Yassien"].forEach(printHello)

//there's something called abstraction which is baisclly means dividing the code into multiple sections so that eveyr section only focuses on what matters to him }


// //132. functions creatin functions 
//so this is a function that's inside there's another function that requires input which is name 
const greet = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`)
    }
}

const greeterHey = greet('hey')
greeterHey('hazem')
    //so this works because greeterHey is now the actual function

// you can also do it all in one step like this
greet('hey there')('hazem');

// 133. the call and apply methods 
const EgyptAir = {
    airlineName: 'EgyptAir',
    iataCode: 'MSR',
    book(flightNum, PassengerName) {
        console.log(`${PassengerName} booked a flight Number: ${flightNum} which has iata code of ${this.iataCode}`)
    }
}

//so now we are seperating the function from the egyptAir list
const book = EgyptAir.book

//so now we can use the function which is inside the EgyptAir object like this : 
const luftHansa = {
    airLineName: 'LuftHansa',
    iataCode: 'LFH',
    book(flightNum, PassengerName) {
        console.log(`${PassengerName} booked a flight Number: ${flightNum} which has iata code of ${this.iataCode}`)
    }
}

EgyptAir.book(123156, 'Hazem Yassien')


//.call method changes the this keyword location 
//so for example if a function has a this keyword you can reset it to a differnet location 
book.call(EgyptAir, 23, 'Sarah Williams')

const swiss = {
    name: "Swiss Air Lines",
    iataCode: "LX",
    bookings: []
}

book.call(swiss, 583, 'mary Cooper')



const calling = {
    religion: 'islam',
    beliver: true,
    prayerTimes: 'five times a day',
    extraInformation(name, age, shortBrief) {
        console.log(`the person's name is ${name} and his religion is 
    ${this.religion} and he prays ${this.prayerTimes} he is ${age} years old and ${shortBrief}`)
    }
}

//the bind method : 
//the bind method allows to set the this keyword for any function call
//it creates a new function where the this keyword is always set to the mentioned location
//so for example :
book.bind(eurowings) //now this is not the book function this is a totally new function 
    //we can even give her a new name 
const bookEW = book.bind(eurowings)
    //so now this function has this keyword set to eurowings

//let's create a new function for every airline: 
const bookMSR = book.bind(EgyptAir)
const bookLFH = book.bind(luftHansa)
const bookLX = book.bind(swiss)
    //so now we can call the function like this :
bookMSR(123156, 'Hazem Yassien')
bookLFH(123156, 'Hazem Yassien')
bookLX(123156, 'Hazem Yassien')

//let's create a new function for every flight:


// //136. IIFE Immediatly invoked function expression:

//they are function that are defined only once and they must be included inside a parenthesis
(function() {
    console.log("this is an IIFE it will run only once")
})()(() => console.log("IIFE is a function that runs only once"))

//if we defined a variable inside and IIFE function scope
//it can't be used outside this function's scope
(function() {
    const insideIIFE = "inside IIFE"
})
console.log(insideIIFE) //will return can't be found 

//so as a refresher
//
{
    const constDefined = "constDefined"
    var varDefined = "varDefined"
}
console.log(constDefined) //will return can't be found because const focuses on scooping
console.log(varDefined) //will return varDefined cuz var doesn't give a single dime about the scope


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

// 138. more closure examples

let f;

const g = function() {
    const a = 23;
    //now I'm going to reassignthe f value to a function value 
    f = function() {
        console.log(a * 2)
    }
}

//timer example :

const boardPassengers = function(n /*number of passengers*/ , wait /*wait time*/ ) {
    const perGroup /*because boarding usually happens in groups*/ = n / 3 /*3 people per group*/ ;
    //now I'm going to set a timer to call the function after wait time
    setTimeout(function() {
        console.log(`${perGroup} passengers have boarded`);
    }, wait);
    //then we will log this : 
    console.log(`${perGroup} groups of 3 people will board in ${wait} seconds`));
}

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge ????

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK ????
*/

/*
 */


(function() {
    const header = document.querySelector('h1')
    header.addEventListener('click', function() {
        header.style.color = 'blue'
    })
    header.style.color = 'red'
})()