function theBeatlesPlay(musicians, instruments) {
  const arr = []
  for (let i = 0, n = musicians.length; i < n; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr;
}

function johnLennonFacts(facts) {
  const shoutedFacts = []
  let i = 0
  while(i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return shoutedFacts;
}

function iLoveTheBeatles(num) {
  const arr = []
  do {
    arr.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return arr;
}
