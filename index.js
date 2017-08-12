function theBeatlesPlay(musicians, instruments) {
  var roles = new Array()
  for (var i = 0; i < musicians.length; i++)
    roles.push(`${musicians[i]}` + " plays " + `${instruments[i]}`)
   //return musicians.length
   return roles
}

function johnLennonFacts(facts) {
 var modifiedFacts = new Array()
  var i = 0
  while (i < facts.length) {
    modifiedFacts.push(`${facts[i]}` + '!!!')
    i++
  }
  return modifiedFacts
}

function iLoveTheBeatles(n) {
  var  array = new Array()
    do {
    array.push('I love the Beatles!')
    n++
  } while (n < 15)
  return array
} 