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


// // 144. looping arrays : for Each: 

// const movements = [100,200,300,400,500,600,700,800,900,1000] 
// movements.forEach(function(movement){
//    console.log(movement)
//  })
//so this function will be executed multiple times 
//first time where movement is 100
//then when movement is 200
//then when movement is 300
//then 400 and 500 and 600 and 700 and 800 and 900

//so if we made a special if statment inside the forEach function to confirm that 

const movements = [100,200,300,400,500,600,700,800,900,1000] 
movements.forEach(function(movement){
if  (movement < 500){
  console.log(`${movement} is smaller than 500`)
}else if(movement > 500){
  console.log(`${movement} is bigger than 500`)
}
  console.log(movement)
 })
//result will be:
// 100 is smaller than 500
// 100
// 200 is smaller than 500
// 200
// 300 is smaller than 500
// 300
// 400 is smaller than 500
// 400
// 500
// 600 is bigger than 500
// 600
// 700 is bigger than 500
// 700
// 800 is bigger than 500
// 800
// 900 is bigger than 500
// 900
// 1000 is bigger than 500
// 1000