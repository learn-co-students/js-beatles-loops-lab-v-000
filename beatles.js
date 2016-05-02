'use strict';

function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for (var i = 0; i < musicians.length; i++){
    arr.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var excitedFacts = [];
  var i = 0;
  while (i < facts.length){
    excitedFacts.push(facts[i] + "!!!");
    i++;
  }
  return excitedFacts;
}

function iLoveTheBeatles(num) {
  var love = [];
  var i = num;
  do {
    love.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return love;
}
