function theBeatlesPlay(name, instr) {
  bandmates = [];
  for (var i = 0; i <= 3; i++) {
    sentence = name[i] + " plays " + instr[i]
    bandmates.push(sentence);
  }
  return bandmates;
}

function johnLennonFacts() {
  var num = 0;
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var likeWhoa = [];
  while (facts[num] !== undefined) {
    likeWhoa.push(facts[num].concat("!!!"));
    num++;
  }
  return likeWhoa
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15)
  return array;
}