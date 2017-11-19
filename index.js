'use strict';

function theBeatlesPlay(musicians, instruments){
  let array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  };
  return array;
}

function johnLennonFacts(facts){
  let shoutedFacts = [];
  let i = 0;
  while(i < facts.length){
    shoutedFacts.push(`${facts[i]}!!!`);
    i++;
  };
  return shoutedFacts;
}

function iLoveTheBeatles(num){
  let array =[];
  do {
    array.push("I love the Beatles!")
    num++
  } while (num < 15);
  return array;
}