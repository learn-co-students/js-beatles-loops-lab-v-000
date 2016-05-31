function theBeatlesPlay(musicians, instruments) {
  var plays = []
  for(var i=1; musicians.length >= i; i++ ){
    plays.push(`${musicians[i-1]} plays ${instruments[i-1]}`)
  }
  return plays
}

function johnLennonFacts(facts) {
  var excited_facts = []
  var i = 0
  while(facts.length > i){
    excited_facts.push(facts[i] + "!!!")
    i++
  }
  return excited_facts
}

function iLoveTheBeatles(n) {
//  var i = 0
  var love_list = []
  do {
    love_list.push("I love the Beatles!")
    n++
  } while (n < 15);
  return love_list
}
