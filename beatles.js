'use strict';

function theBeatlesPlay(musiciansArr, instrumentsArr){
  var stringArr = [];
  var plays = " plays ";
  for (var i = 0; i < 4; i++){
    stringArr.push(musiciansArr[i]+plays+instrumentsArr[i])
  };
  return stringArr;
}

function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var factsExc = [];
  var exc = "!!!";
  while (factsExc.length < facts.length){
    factsExc.push(facts[factsExc.length]+exc);
    };
    return factsExc;
  }

  function iLoveTheBeatles(number) {
    var loveArr = [];
    var love = "I love the Beatles!";
    do {
      loveArr.push(love);
      number++;
    } while (number < 15);
    return loveArr;
  }