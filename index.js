function theBeatlesPlay (musicians, instruments)
{
  var a = [];
  var i;
  for (i = 0; i <= instruments.length-1 && musicians.length-1; i++)
  {
    a.push(musicians[i] + " plays " + instruments [i]);
  }
  return a;
}

function johnLennonFacts (array)
{
  var a = [];
  var i = 0;

  while (i < array.length)
  {
    a.push(array[i] + "!!!");
    i++;
  }
  return a;
}

function iLoveTheBeatles (number)
{
  var a = [];
  var i = 0;
  do 
  {
    a.push("I love the Beatles!")
    i++;
  } while (i <= number && number < 15);
  return a;
}
