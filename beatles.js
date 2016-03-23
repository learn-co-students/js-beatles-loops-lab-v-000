'use strict';

function theBeatlesPlay(musicians,instruments){
  var phrases = [];

  for(var i = 0; i < musicians.length; i++) {
    phrases.push(musicians[i] + " plays " + instruments[i]);
  }

  return phrases;
}


function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var importantFacts = [];
  var i = 0;

  while (i < facts.length) {
    importantFacts.push(facts[i] + "!!!");
    i++;
  }

  return importantFacts;
}

function iLoveTheBeatles(number) {
  var newArray = [];

  do {
    newArray.push("I love the Beatles!")
    number++;
  } while (number < 15)
  return newArray;
}