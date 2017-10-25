  
  "use strict"
  //If I could go anywhere in the world, I would go to New Zealand.
  const anywhere = ['Iceland', 'New Zealand', 'Bali']
  const anywhereResponse =  prompt('If I could go anywhere in the world today, where would I go?');
  if (anywhere(anywhereResponse)=== 'Iceland')
  {alert ('Iceland is rumored to be one of the most beautiful places on Earth !');}
  else if (anywhere(anywhereResponse)=== 'New Zealand')
  {alert ('New Zealand has more sheep than people!');}
  else if (anywhere.indexOf (anywhereResponse)=== 'Bali')
  {alert ( 'I would love the beaches of Bali');}
  else
  {alert (anywhereResponse + 'sounds like a beautiful place to visit.');}
  console.log ('I would like to go to' + anywhereResponse);

//I could eat tacos, pho or chocolate everyday.
  const food = ['tacos', 'pho', 'chocolate']
  const foodResponse = prompt ('What food do I eat more of than you might think possible?');
  if (food.includes (foodResponse))
  {alert ('I never get tired of ' + foodResponse);}
  else
  {alert (foodResponse + 'is definitely not right.')}; 
  console.log ('I sometimes eat' + foodResponse + 'other wierd food too.');


//I love sloths.
  const animal  = prompt ('Do I love sloths?')
  if  (animal.toLowercase ()=== 'yes' || animal.toLowercase ()=== 'y'){
  alert ("Sloths are so wierd.  I adore them.");}
  else (animalResponse != sloth);{
    alert ('There are very few animals I don\'t like.');}

//My least favorite thing is being cold.//
    const least = prompt ('Do I like the cold?')
    if (least() === 'Yes' ||  least === 'Y'){
      alert ('No way, Jose.  I can\'t stand to be cold.')
    ||(least != Yes);
   // console.log ("Now you\'re starting to figure me out!');
