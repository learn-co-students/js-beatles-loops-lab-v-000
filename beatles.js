"use strict";

function theBeatlesPlay(musicians, instruments) {
  const result = [];
  for (var i = 0; i < musicians.length; i++) {
    result.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return result
}

function johnLennonFacts(facts) {
  return facts.map((fact) => fact + '!!!')
}

function iLoveTheBeatles(n) {
  const result = [];
  do {
    result.push("I love the Beatles!")
    n++
  } while (n < 15)

  return result
}
