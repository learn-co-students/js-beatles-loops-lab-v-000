function theBeatlesPlay(musicians, instruments){
  var results = [];
  for(var i = 0; i < musicians.length; i++){
    results.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return results;
}

function johnLennonFacts(facts){
  var results = [];
  for(var i = 0; i < facts.length; i++){
    results[i] = facts[i]+'!!!';
  }
  return results;
}

function iLoveTheBeatles(n){
  var results = [];
  do{
    results.push("I love the Beatles!");
    n++;
  }while(n < 15);
  return results;
}
