// // 131. functions accepting callback functions 
//so let's write a function that replaces words in a sentance : 
const oneWord = function(str){
  return str.replace(/ /g/*this will choose all the spaces i the string*/, '').toUpperCase()
}

const upperFirstWord = function(str) {
  const [first, ...otherWords] = str.split(' ')
return [first.toUpperCase(), ...others].join(' ')
}

//so this is a higher order function right here : 
const transformer = function(str, fn){
  //so the function that we will pass inside this function will transform the other input which is the 'str'
  console.log(`Original String ${str}`)
  console.log(`Transformed String fn(${str})`)
}
