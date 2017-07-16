
function theBeatlesPlay(musicians,instruments){
  var array=[]
  for (var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)

  }
return array;
}

function johnLennonFacts(facts){
  const shoutedfacts=[]
  let i=0
  while (i < facts.length) {
    shoutedfacts.push (`${facts[i]}!!!`)
    i++
  }
  return shoutedfacts
}

function iLoveTheBeatles(n){
  const arr=[]

do {
  arr.push ('I love the Beatles!')
  n++
} while (n<15)
return arr
}
