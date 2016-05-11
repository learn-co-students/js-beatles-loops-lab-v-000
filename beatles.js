'use strict';

function theBeatlesPlay(musicians, instruments){
  var set = []
  for (var i = 0; i < musicians.length; i++){
    var phrase = musicians[i] + " plays " + instruments[i];
    set.push(phrase);
  }
  return set;
}

function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var newFacts = [];
  var i = 0;
  while (i < facts.length){
    newFacts.push(facts[i] + "!!!");
    i ++;
  }
  return newFacts;
}

function iLoveTheBeatles(num){
  var loveArray = [];
  do {
    loveArray.push("I love the Beatles!");
    num ++;
  } while(num < 15);
  return loveArray;
}