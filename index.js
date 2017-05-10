

function theBeatlesPlay(musicians, instruments) {

  const array = []

  //musician + play + instruments//
  for (let i = 0, l = musicians.length; i < l; i++ ) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)

  }
  return array
  /*
  for ([initialization]; [condition]; [iteration]) {
  [loopBody]
}
*/

}


function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

/*  while ([condition]) {
  [loopBody]
}
*/

  return shoutedFacts
}


function iLoveTheBeatles(n) {
  const array = []

  do {
    array.push(`I love the Beatles!`)
    n++
  } while (n < 15)

  /* do {
  [loopBody];
} while ([condition]);
*/
  return array
}
