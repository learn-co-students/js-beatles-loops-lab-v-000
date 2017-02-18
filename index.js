function theBeatlesPlay(musicians, instruments) {
  let array = []
  for(let i = musicians.length - 1; i >= 0; i--){
    array.unshift(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(strings) {
  let facts = []
  let i = 0
  while(i < strings.length) {
    facts.push(`${strings[i]}!!!`)
    i++
  }
  return facts
}

function iLoveTheBeatles(num) {
  const arr = []
  do {
    arr.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return arr;
}




 //  3) Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 :
 //     Error: Expected undefined to equal [ 'I love the Beatles!', 'I love the Beatles!', 'I love the Beatles!', 'I love the Beatles!', 'I love the Beatles!', 'I love the Beatles!', 'I love the Beatles!', 'I love the Beatles!' ]
 //      at assert (node_modules/expect/lib/assert.js:29:9)
 //      at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
 //      at Context.<anonymous> (test/index-test.js:27:34)

 //  4) Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' once when passed the parameter 17:
 //     Error: Expected undefined to equal [ 'I love the Beatles!' ]
 //      at assert (node_modules/expect/lib/assert.js:29:9)
 //      at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
 //      at Context.<anonymous> (test/index-test.js:31:35)


