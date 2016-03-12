'use strict';

function theBeatlesPlay(musicians, instruments) {
  var facts = []
  for (var i=0;i<musicians.length;i++) {
    facts.push(musicians[i] + " plays " + instruments[i]);
  }
  return facts;
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var exciting_facts = []
  for (var i =0;i<facts.length;i++) {
    exciting_facts.push(facts[i] + '!!!');
  }
  return exciting_facts;
}

function iLoveTheBeatles(num) {
  var love = []
  do {
    love.push("I love the Beatles!");
    num++;
  } while (num<15);
  return love;
}