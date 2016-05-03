'use strict';

function theBeatlesPlay(musicians, instruments){
  var sentences = [];
  for (var i = 0; i < musicians.length; i++) {
    var phrase = musicians[i] + " plays " + instruments[i];
    sentences.push(phrase);
  }
  return sentences;
};

function johnLennonFacts(){
  var newFacts = [];
  var i = 0
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  
  while(i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    number++;
  } while(number < 15);
  return array;
}