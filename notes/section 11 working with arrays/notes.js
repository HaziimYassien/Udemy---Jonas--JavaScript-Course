// //142. simple array methods
//arrays are objects 

//let's make a simple array 
let arr = ['a','b','c','d','e']

//slice prints the chosen parts of the object
console.log(arr.slice(1,-3))
console.log(arr.slice(0,2))


//splice removes the chosen parts 
arr.splice(1/*start location*/,3/*how many objects to delete*/)

//reverse, reverses the array

//concat, adds two arrays to each other


// //143. the new at method :
console.log('so I skipped this part sorry ')
const arr = [1, 3, 4, 65, 7, 0]
//so simply if we want to log the first number
//we can just use the at method and insert the number's location
console.log(arr.at(0))

// // 144. looping arrays : for Each: 


//145. forEach with maps and sets :

//so here's a simple map : 
const currencies = new Map([
    ['USD', 'United States Dollar'],
    ['EUR', "Euro"],
    ['GBP', "Pound Sterling"],
])

//now we gon loop over them : 
currencies.forEach(function (value, key, map) {
    console.log(`${value} and ${key} and ${map}`)
})

//so how does this work he didn't define the value or the key or the map ?