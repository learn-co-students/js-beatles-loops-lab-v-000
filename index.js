

function theBeatlesPlay(arym, aryi) {

  var ary = []

  for (var i = 0; i < 4; i++) {

    ary.push(arym[i] + " plays " + aryi[i]);
  }
  return ary 
//     The function should also contain a for loop which loops over the array 
//   of musicians. You'll want to be careful about what value you set your 
//   counter variable to store. (Hint: Think about what the first index of an 
//     array is). The first time through the loop, the body of the loop should 
// create a string using the first index of the musicians array and the first 
// index of the instruments array: "John Lennon plays guitar". This string 
// should be added to the empty array you created. The loop should make the 
// same sentence for every member of the musicians array. The function should 
// return the array of new strings.

}



function johnLennonFacts(facts) {
  var ary = []

  for (var i = 0; i < facts.length; i++ ) {
    ary.push(facts[i] + "!!!")

  }
  return ary //of strings w !!!
}


function iLoveTheBeatles(num) {
  var ary = []

  do {
    ary.push("I love the Beatles!")
    num++
  } while (num < 15)
  return ary
}











