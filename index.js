function theBeatlesPlay(musicians, instruments) {

  let emptyArr = [];
  for (let i = 0; i < musicians.length; i++) {
    let str = `${musicians[i]} plays ${instruments[i]}`;
    emptyArr.push(str);
  }
return emptyArr;
}

function johnLennonFacts(facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]) {

let strArr = [];
let counter = 0;
while(counter < facts.length) {
  strArr.push(`${facts[counter]}!!!`);
  counter++
}
  return strArr;
}

function iLoveTheBeatles(number) {

let arr = [];

do{
  arr.push("I love the Beatles!");
  number++;
} while(number < 15);
  return arr;
  
}


