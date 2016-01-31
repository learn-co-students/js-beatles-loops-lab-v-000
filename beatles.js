'use strict';

function theBeatlesPlay(musicians, instruments){
  var results = [];
  for (var i = 0; i < musicians.length ;i++){
    var stm = musicians[i] + " plays " + instruments[i];
    results.push(stm);
  }
  return results;
}

function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", 
  "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var betterFacts = [];
  var i = 0;
  while (i < facts.length){
    betterFacts.push(facts[i] + "!!!");
    i++;
  }
  return betterFacts;
}

function iLoveTheBeatles(num){
  var stream = [];
  do {
    stream.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return stream;
}