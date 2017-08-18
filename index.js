function theBeatlesPlay(muArray, inArray) {
  let newArray = []

  for (let i = 0; i < muArray.length ; i++) {
    newArray.push(`${muArray[i]} plays ${inArray[i]}`)
  }

  return newArray
}

function johnLennonFacts(johnArray) {
  let newArray = []

  while (newArray.length < johnArray.length) {
    let string = johnArray[newArray.length].concat("!!!");
    newArray.push(string);
  }

  return newArray;
}

function iLoveTheBeatles(num) {
  let newArray = []

  do {
    newArray.push("I love the Beatles!")
    ++num
  } while (num < 15)

  return newArray;
}
