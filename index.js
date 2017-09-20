function theBeatlesPlay(musicians, instruments){

  var arr = [];
  var musician = musicians.length;
  //for(var i = 0; i < musicians.length; i++){
  for(var i = 0; i < musician; i++){
  arr.push(musicians[i]  + ' plays ' + instruments[i])
  }
  return arr;
}

function johnLennonFacts(facts){
  const someFacts = []
  let i = 0;
  while(i < facts.length){
    someFacts.push(`${facts[i]}!!!`)
    i++
  }
  return someFacts;
}

function iLoveTheBeatles(num){
  const arr = []

  do{
    arr.push('I love the Beatles!')
    num++
  } while (num < 15)

  return arr
}
