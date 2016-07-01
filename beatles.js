function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}


function johnLennonFacts(array){
i=0
var new_array=[]
while (i<array.length){
new_array.push(array[i]+'!!!');
i++

}

return new_array;
}


function iLoveTheBeatles(number){
var array=[]
do{
array.push('I love the Beatles!');
  number++
}while (number<15)


return array;
}
