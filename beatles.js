'use strict';
function theBeatlesPlay(){

    var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

    return musicians.map(function(b, i){
      return b + " plays " + instruments[i];
    });
};


function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

  return facts.map(function(s){
    return s.concat("!!!");
  });
};

// function iLoveTheBeatles(num){
//   if (num < 10){
//     return new Array(num+1).fill("I love the Beatles!");
//   } else {
//     return new Array(1).fill("I love the Beatles!");
//   }
// };
function iLoveTheBeatles(num){
  var output = [];
  do {
    output.push("I love the Beatles!");
    num--;
  }
  while (num >= 0 && num < 10);
  return output
};
