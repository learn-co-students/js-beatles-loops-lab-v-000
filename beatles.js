'use strict';

function theBeatlesPlay(musicianArray, instrumentArray) {
  var finalArray = []

  for (var i = 0; i < musicianArray.length; i++) {
    var stringToAdd = musicianArray[i] + " plays " + instrumentArray[i];
    finalArray.push(stringToAdd);
  }
  return finalArray;
}

function johnLennonFacts() {
  var finalArray = [];
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var i = 0

  while (i < facts.length) {
    finalArray.push(facts[i] + '!!!');
    i++;
  }
  return finalArray;
}

function iLoveTheBeatles(counter) {
  var finalArray = [];

  do {
    finalArray.push('I love the Beatles!');
    counter ++;
  } while (counter < 15);
  return finalArray;
}
