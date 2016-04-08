'use strict';

function theBeatlesPlay(musicians, instruments){
  var ary = [];
  for (var i = 0; i < musicians.length; i++){
    ary.push(musicians[i] + " plays " + instruments[i]);
  }
return ary;
}

function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var i = 0;
  var ary = [];
  while (i < facts.length){
    ary.push(facts[i] + "!!!");
    i++;
  }
  return ary;
}

function iLoveTheBeatles(num){
  var ary = []
  do {
      ary.push("I love the Beatles!")
      num++;
  }
  while (num < 15);
  return ary;
}
