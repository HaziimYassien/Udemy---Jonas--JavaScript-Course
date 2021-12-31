//so what I did her is the following 
const airLine = "         Egypt Air Forceeeeeeeeeees        "
//first I created a string of objects which is called egypt air forces 
const airPlane = "A320"
//then i removed a specific area of this object using .slice function 
//then I chose which area of the object I would like to remove using .indexOf
const egypt = airLine.slice(airLine.indexOf('E'), airLine.indexOf(" "))
console.log(egypt)

/// working with strings part 2 :
console.log(airLine.toLowerCase())
//you can use the trim method to remove extras spaces on both sides
console.log(airLine.trim())
console.log(airLine.replaceAll('e', 'f'))

//making a function that lowercases it's input 

function lowering(text) {
    console.log(text.toLowerCase())
}

lowering("testingGGGG the UntEsted")
///package checking function 
const checkBaggage = function (items) {
    const baggage = items.toLowerCase()
    // items.trim()

    if (baggage.includes('knife') || baggage.includes("gun")) {
        console.log('you are not allowed on board')
    } else {
        console.log("welcome on board")
    }
}

checkBaggage("I have a laptop a knife for some tuna")
checkBaggage("I have a laptop a kNife for some tuna")

console.log("this+is+a+space".split('+').join("              "))


const captializedName = function (name) {
    const names = name.split(' ')
    const namesUpper = []
    for (const n of names) {
        namesUpper.push(n[0].toUpperCase() + n.slice(1))
    }
    console.log(namesUpper)
}

captializedName("hazem magdy")

let padding = "padding"

console.log(padding.padStart(100, "+"))
console.log(padding.padEnd(100, "+"))

console.log('103-12-3339390prnt'.slice(-4))

console.log(".....this message is repeated".repeat(10000000))