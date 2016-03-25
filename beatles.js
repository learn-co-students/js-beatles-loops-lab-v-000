'use strict';

function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  var player = '';

  for (var i=0; i<musicians.length; i++) {
    player = musicians[i] + ' plays ' + instruments[i];
    arr.push(player);
  }

  return arr;
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var wowFacts = [];
  var counter = 0;

  while(counter < facts.length) {
    wowFacts.push(facts[counter] + '!!!');
    counter++;
  }

  return wowFacts;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return arr;
}

