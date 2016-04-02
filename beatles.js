'use strict';

function theBeatlesPlay(players, instruments) {
 var arr = []
 for (var i = 0; i < players.length; i++) {
   arr.push(players[i] + " plays " + instruments[i])
 }
 return arr
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var answers = []
  for (var i in facts) {
    answers.push(facts[i] + "!!!")
  }
 return answers
}

function iLoveTheBeatles(num) {
  var answer = []
  do {
    answer.push("I love the Beatles!")
    num++
  } while (num < 15)

return  answer
}