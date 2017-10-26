  

  //If I could go anywhere in the world, I would go to New Zealand.
  const array1 = ['iceland', 'new zealand', 'bali'];
  const anywhereResponse =  prompt('If I could go anywhere in the world today, where would I go?').toLowerCase();

  if (array1.indexOf(anywhereResponse)=== 0)
    {alert ('Iceland is rumored to be one of the most beautiful places on Earth !');}
  if (array1.indexOf(anywhereResponse)=== 1){
    alert ('New Zealand has more sheep than people!');
  }
  if (array1.indexOf(anywhereResponse)=== 2)
    {alert ( 'I would love the beaches of Bali');}
  else if (array1.indexOf(anywhereResponse != 0,1,2));
{alert (anywhereResponse + 'sounds like a beautiful place to visit.');}
  console.log ('I would like to go to ' + anywhereResponse);

//I could eat tacos, pho or chocolate everyday.
  const food = ['tacos', 'pho', 'chocolate']
  const foodResponse = prompt ('What food do I eat more of than you might think possible?').toLowerCase();
  if (food.includes (foodResponse))
  {
    alert ('I never get tired of  ' + foodResponse);
  }
  else
  {
    alert (foodResponse + 'is definitely not right.')
  } 
  console.log ('I sometimes eat ' + foodResponse + ' too.');


//I love sloths.
  const animal  = prompt ('Do I love sloths?').toLowerCase ();
  if  (animal === 'yes' || animal=== 'y')
  {
    alert ("Sloths are so wierd.  I adore them.");
  }
  else (animalResponse != sloth);
  {
    alert ('There are very few animals I don\'t like.');
  }

//My least favorite thing is being cold.//
  const least = prompt ('Do I like the cold?').toLowerCase();
  if (least === 'Yes' ||  least === 'Y'){
      alert ('No way, Jose.  I can\'t stand to be cold.');
  }
  else if (least === 'No' || least === 'N'){
    alert ('Now you are really getting to know me!');
  }