'use strict';

function theBeatlesPlay(musicians, instruments) {
  var array = [];

  for (let i = 0; i < musicians.length; ++i) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}

function johnLennonFacts(facts) {
  for (let i = 0; i < facts.length; ++i) {
    facts[i] = facts[i].concat('!!!');
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var newArray = [];
  do {
    newArray.push('I love the Beatles!');
    number++;
  } while (number < 15);
  return newArray;
}
