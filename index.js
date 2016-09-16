function theBeatlesPlay(musician_array, inst_array) {
  var array_of_strings = [];
  for (let i = 0; i < musician_array.length; i++) {
    array_of_strings.push(`${musician_array[i]} plays ${inst_array[i]}`)
  }
  return array_of_strings;
}

function johnLennonFacts(array_of_facts) {
  var num = 0;
  var array_of_strings = [];
  while (num < array_of_facts.length) {
    array_of_strings.push(`${array_of_facts[num]}!!!`);
    num++;
  }
  return array_of_strings;
}

function iLoveTheBeatles(num) {
  var array_of_strings = [];
  do {
    array_of_strings.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return array_of_strings;
}