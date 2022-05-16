// so the call method changes where the this keyword will point to the
//
const secureBooking = function() {
    let passengerCount = 0

    return function() {
        passengerCount++
        console.log(`${passengerCount} passengers`)
    }
}

const booker = secureBooking()

booker()
booker()
booker()