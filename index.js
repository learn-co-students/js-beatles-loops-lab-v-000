function theBeatlesPlay(musicians,instruments)
{
  var array= new Array();
  var s;
  for(var i=0;i<musicians.length;i++)
  {
   s = musicians[i] + " plays " + instruments[i] ;
   array.push(s);
 }

 return array;
 }

function johnLennonFacts(facts)
{
  var i=0;
  var s;
  var array = new Array();
  while(i<facts.length)
  {
    s=facts[i]+"!!!";
    array.push(s);
    i=i+1;
  }
  return array;
}


function iLoveTheBeatles(number)
{
  var array=new Array();
  do {
    array.push("I love the Beatles!");
    number=number+1;
  } while (number<15);
  return array;
}
