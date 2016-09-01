function theBeatlesPlay(musicians, instruments) {
  let arr = [];
  for (var i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  };
  return arr;

}

function johnLennonFacts(facts) {
  let shoutedFacts = [];
  let i = 0;
  while(i < facts.length){    
    shoutedFacts.push(`${facts[i]}!!!`);
    i++;   
  };
  return shoutedFacts;
}

function iLoveTheBeatles(num) {
  let arr = [];
  do {
    arr.push("I love the Beatles!")
    num++
  } while (num < 15);
  return arr;
}