'use strict';

function theBeatlesPlay (musician, instrument) {
  var empt = [];
  for (var i = 0, l = musician.length; i < l; i++)
    {empt.push(musician[i] + " plays " + instrument[i]);}
  return empt;
}

function johnLennonFacts() {
  const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"];
  const newfacts = [];
  var i = 0;
  while (i < facts.length) {newfacts.push(facts[i] + "!!!"), i+=1;}
  return newfacts
}

function iLoveTheBeatles (number) {
  var empty = [];
  do {empty.push("I love the Beatles!"), number+=1} while (number<15);
  return empty
}
