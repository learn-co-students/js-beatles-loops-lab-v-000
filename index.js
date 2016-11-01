function theBeatlesPlay(musicians, instruments) {
  var newOne = [];

  for (var i = 0; i < musicians.length; i++) {
      newOne.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newOne;
}

function johnLennonFacts(facts) {
  var arr = [];
  var countdown = 0
  while (countdown < facts.length) {
    arr.push(facts[countdown] + "!!!");
    countdown+=1
  }
  return arr;
}

function iLoveTheBeatles(num) {
  var beatlesArray = [];
  do {
    beatlesArray.push("I love the Beatles!")
    num+=1
} while (num < 15);
return beatlesArray
}
