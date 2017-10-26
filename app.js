  
'use strict';

let totalScore = 0;


const userName = prompt('Hi! What\'s your name?');{
  alert ('Hi, ' + userName + ' want to play a guessing game?');
}

questionOne();

function questionOne () {
  //I love sloths.
 const animal  = prompt ('Do I love sloths?').toLowerCase ();
 if  (animal === 'yes' || animal=== 'y')
 {
   alert ("Sloths are so wierd.  I adore them.");
 }
 else //(animal === 'no' || animal === 'n');
 {
   alert ('There are very few animals I don\'t like.');
 }
}
//  //I love sloths.
//  const animal  = prompt ('Do I love sloths?').toLowerCase ();
//   if  (animal === 'yes' || animal=== 'y')
//   {
//     alert ("Sloths are so wierd.  I adore them.");
//   }
//   else //(animal === 'no' || animal === 'n');
//   {
//     alert ('There are very few animals I don\'t like.');
//   }


//My least favorite thing is being cold.//
  const least = prompt ('Do I like the cold?').toLowerCase();
  if (least === 'yes' ||  least === 'y'){
      alert ('No way, Jose.  I can\'t stand to be cold.');
  }
  else if (least === 'no' || least === 'n'){
    alert ('Now you are really getting to know me!');
  }

  //Do you thnk I speak any languages besides English?
  const language = prompt ('Do you think I can speak any languages besides English?').toLowerCase();
  if (language === 'yes' || language === 'y'){
    alert( 'Well, speak is a stretch, but I know a little French, Spanish and Norwegian');
  }
  else if (language != 'yes' || language != 'y'){
      alert ('Speak is a strong word, but I can butcher 3 different languages.');
  }

  //Do you think I can hula hoop?
  const hoop = prompt ('Do you think I know how to hula hoop?').toLowerCase();
  if (hoop === 'yes' || hoop === 'y'){
    alert ('I can hoop and eat a taco at the same time!');
  }
  else if (hoop != 'yes' || hoop != 'y'){
    alert ('I can hula hoop for hours.');
  }

  //How about whistling?
  const whistle = prompt ('How about whistling?');
  if (whistle === 'yes' || whistle === 'y'){
    alert ( 'I am a terrible whistler.  One note only.');
  }
  else if (whistle != "yes" || whistle != 'y'){

    alert ('Good guess!  That skill eludes me.');
  }

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
{alert (anywhereResponse + ' sounds like a beautiful place to visit.');}
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
    alert (foodResponse + ' is definitely not right.')
  } 
  console.log ('I sometimes eat ' + foodResponse + ' too.');

  alert('Nice job ' + user + ' you got ' + totalScore + ' right!');