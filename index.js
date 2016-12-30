function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < (musicians.length); i++){
    debugger;
    var sentence = `${musicians[i]} plays ${instruments[i]}`
    array.push(sentence);
  }
  return array;
}

function johnLennonFacts(facts) {
  var array = [];
  while (array.length < facts.length) {
    for (let i = 0; i < facts.length; i++) {
      array.push(`${facts[i]}!!!`)
    }
  }
  return array;
}

function iLoveTheBeatles(number) {
  var number = number
  var array = [];
  do {
    array.push("I love the Beatles!");
    number += 1
  } while (number < 15);
  return array;
}
