function theBeatlesPlay(beatles, instruments) {
  array = [];
  for (i=0; i<4; i++) {
    array.push(beatles[i] + " plays " + instruments[i])
  }
  return array;
}

function johnLennonFacts(facts) {
  num = 0
  while (num < facts.length) {
    facts[num] = facts[num] + "!!!";
    num++;
  }
  return facts
}
function iLoveTheBeatles(num) {
  array = [];
    do {
    array.push("I love the Beatles!");
    num++
  } while (num < 15);
  return array;
}