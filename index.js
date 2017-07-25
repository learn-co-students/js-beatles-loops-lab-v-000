function theBeatlesPlay(musicians, instruments) {
  var result = []

  for (let i = 0 ; i < instruments.length ; i++ ){
    result.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return result
}


function johnLennonFacts(facts){
  var result = []

  for (let i=0; i<facts.length; i++){
    result.push(facts[i] + "!!!")
  }
  return result
}


function iLoveTheBeatles(num){
  var result = []

  do {
    result.push("I love the Beatles!");
    num++
  }
  while (num < 15);

  return result
}

// "John Lennon plays guitar"


// Then, implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array.
// Then the loop should increment the number passed in as a parameter. The condition of the loop should check to see
// that the parameter number is less than 15. The function should return the array with the strings "I love the Beatles!".


//example of a do-while
// function doWhileLoop(array) {
//   function maybeTrue() {
//     return Math.random() >= 0.5
//   }

//   do {
//     array = array.slice(1)
//   } while (array.length > 0 && maybeTrue())

//   return array
// }
