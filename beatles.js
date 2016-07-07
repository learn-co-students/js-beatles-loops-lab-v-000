"use strict";

function theBeatlesPlay(musicians, instruments) {
  var anArray = [];
  for (var i = 0; i < musicians.length; i++) {
    anArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return anArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  var factsArray = [];
  while (facts.length > i) {
    factsArray.push(facts[i] + "!!!");
    i++;
  }
  return factsArray;
}

function iLoveTheBeatles(number) {
  var anArray = [];
  do {
    anArray.push("I love the Beatles!")
    number++;
  } while (number < 15);
  return anArray;
}
