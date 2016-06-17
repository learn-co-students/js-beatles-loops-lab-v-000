function theBeatlesPlay(musicians, instruments){
  var statements = [];
  for(var index = 0; index < musicians.length; index++){
    debugger;
    statements.push(`${musicians[index]} plays ${instruments[index]}`);
  }
  return statements;
}

function johnLennonFacts(facts){
  var index = 0;
  while(index < facts.length){
    facts[index] = facts[index].concat('!!!');
    index++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while(number < 15);
  return array;
}
