function theBeatlesPlay(musicians,instruments){
var newArray = [];
  for(var i=0;i<4;i++)
  {
  
   newArray.push(`${musicians[i]} plays ${instruments[i]}`); 
  }//end for loop
  return newArray;
}//end function

function johnLennonFacts(facts){
  var i = 0;
  var newArray = [];
  var n = facts.length;
  //var n = facts.length;
while(i < n)
{
newArray.push(`${facts[i]}!!!`);
i++}//end while loop 
return newArray;
}//end function

function iLoveTheBeatles(n){
var array = [];
//var n = array.length;
do{array.push("I love the Beatles!");
n++}  //end do
while (n<15);
return array;
 
}//end function