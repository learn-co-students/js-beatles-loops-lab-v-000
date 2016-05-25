function theBeatlesPlay(musicians, instruments){
  var temp = [];
  for(var i=0; i < musicians.length; i++){
    temp.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return temp;
};

function johnLennonFacts(facts){
  var exclaimed= [];
  for(var i=0; i<facts.length; i++){
    exclaimed.push(`${facts[i]}!!!`);
  }
  return exclaimed;
};

function iLoveTheBeatles(number){
  var temp=[];
  do{
    temp.push("I love the Beatles!");
    number++;
  }  while(number<15);
  return temp;
};
