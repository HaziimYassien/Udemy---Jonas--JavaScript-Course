// // 128. default parameters : 
//I have no idea what is default parameters meaning but this the old way of setting default parameters

const bookings = [];

const createBooking = function(flightNum, numPassengers, price){
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
const createBooking = function(flightNum = "CAI1001", numPassengers = "0", price = "100"){
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
const createBooking = function (
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

//130. first-class and higher-order functions : 
//javascript treats functions as values 
//so for example : 
//this is a function :
const add = (a,b) => a + b;

//higher order functions area functions that receive other function as an argument and returns a totally new function 
//so for example : 
const sujood = (bodyPart) => {console.log(`${bodyPart} is making sujood`)}
const prayer = (sujood)
prayer()
//higher order functions can also return other function
//example: 
const back = 'back'
const sujood = (bodyPart) => {console.log(`${bodyPart} is making sujood`)}
const prayer = (sujood)
sujood(back)
prayer()

// // 131. functions accepting callback functions 
//so let's write a function that replaces words in a sentance : 
const oneWord = function(str){
  e
}