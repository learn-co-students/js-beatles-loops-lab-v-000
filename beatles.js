function theBeatlesPlay(musicians, instruments){
  var output = [];
  
  for(var i = 0; i < musicians.length; i++){
    output.push(musicians[i] + " plays " + instruments[i]);
  }
  
  return output;
}

function johnLennonFacts(factsArray){
  var i = 0;
  while(i < factsArray.length){
    factsArray[i] += "!!!";
    i++;
  }
  return factsArray;
}

function iLoveTheBeatles(num){
  var empt = [];
  do{
    empt.push("I love the Beatles!");
    num++;
  }
  while(num < 15);
  
  return empt;
}