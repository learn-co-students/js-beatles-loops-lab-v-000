function theBeatlesPlay(musicians, instruments) {
  var artistInstrument = []

  for (let i = 0; i < musicians.length; i++) {
    artistInstrument.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return artistInstrument
}


function johnLennonFacts(facts){
  for (let i = 0; i < facts.length; i++) {
    facts[i] = `${facts[i]}!!!`;
  }
  return facts;
}


function iLoveTheBeatles(num){
  var answer = []
  do {
    answer.push("I love the Beatles!")
    num -= 1
  } while (num < 15 && num >= 0);
  
  return answer
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
