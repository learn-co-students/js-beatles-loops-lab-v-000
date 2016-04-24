'use strict';

function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var lineup = [];
  for (var i=0; i < musiciansArray.length; i++) {
    lineup.push(musiciansArray[i] + " plays " + instrumentsArray[i]);
  }
  return lineup;
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var excited = [];
  var i = 0;
  while (i < facts.length) {
    excited.push(facts[i] + "!!!");
    i += 1;
  }
  return excited;
}

function iLoveTheBeatles(number){

  var love = []
  do {
    love.push("I love the Beatles!");
    number += 1;
  } while (number < 15);
  return love;
}