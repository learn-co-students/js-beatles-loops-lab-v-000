function theBeatlesPlay(musicians, instruments) {
  const strings = [];

  for (var i = 0 ; i < musicians.length; i++) {
    strings.push(musicians[i]+" plays "+instruments[i]);
  }
  return strings;
}

function johnLennonFacts(facts) {
  let counter = 0
  
  while (counter < facts.length) {
    facts[counter] = facts[counter]+"!!!";
    counter++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  const strings = [];

    do {
    strings.push("I love the Beatles!");  
    num++;
  } while (num < 15);

  return strings;
}