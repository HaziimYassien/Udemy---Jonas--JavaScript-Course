// 133. the call and apply methods 
const EgyptAir = {
  airlineName: 'EgyptAir',
  iataCode: 'MSR',
  book(flightNum, PassengerName){
    console.log(`${PassengerName} booked a flight Number: ${flightNum} which has iata code of ${this.iataCode}`)
  }
  }

//so now we are seperating the function from the egyptAir list
const book = EgyptAir.book

//so now we can use the function which is inside the EgyptAir object like this : 
const luftHansa = {
  airLineName:   'LuftHansa',
  iataCode: 'LFH',
  book(flightNum, PassengerName){
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
  extraInformation(name, age, shortBrief){
    console.log(`the person's name is ${name} and his religion is ${this.religion} and he prays ${this.prayerTimes} `)
  }
}