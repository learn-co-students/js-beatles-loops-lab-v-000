
function theBeatlesPlay(m, instr) {
  var ans = [];
  for (var i = 0; i < m.length; i++) {
    ans.push(`${m[i]} plays ${instr[i]}`)
  }
  return ans;
}

function johnLennonFacts(facts) {
  var ans = [];
  for (var i = 0; i < facts.length; i++) {
    ans.push(facts[i] + "!!!")
  }
  return ans;
}

function iLoveTheBeatles(num) {
  var ans = [];
  do {
    ans.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return ans;
}