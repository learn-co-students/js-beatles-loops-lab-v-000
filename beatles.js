'use strict';
function theBeatlesPlay(musicians, instruments){
  var storage = [];
  var iteration = musicians.length;
  for(var i = 0; i < iteration; i++){
    storage[i] = musicians[i] + " plays " + instruments[i];
  };
  return storage;
}

function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var storage = [];
  var iteration = facts.length;
  var i = 0;
  while(i < iteration){
    storage.push(facts[i] + "!!!");
    i++;
  }
  return storage;
}

function iLoveTheBeatles(num){
  var storage = [];
  do {
    storage.push("I love the Beatles!");
    num++;
  } while(num < 15)
  return storage;
}