'use strict';

//If I could go anywhere in the world, I would go to New Zealand.const anywhere = ['Iceland', 'New Zealand', 'Bali']
const anywhereResponse =  prompt('If I could go anywhere in the world today, where would I go?');
if (anywhereResponse.indexOf (anywhereResponse) === 0)
{alert ('Iceland is rumored to be one of the most beautiful places on Earth !');}
else if (anywhereResponse.indexOf (anywhereResponse) === 1)
{alert ('New Zealand has more sheep than people!');}
else if (anywhereResponse.indexOf (anywhereResponse) === 2)
{alert ( 'I would love the beaches of Bali');}
else
{alert (anywhereResponse + 'sounds like a beautiful place to visit.');}
console.log ('I would like to go to' + anywhereResponse);

//I could eat tacos, pho or chocolate everyday.
const food = ['tacos', 'pho', 'chocolate'];
const foodResponse = prompt ('What could I eat (almost) everyday?');
if (food.includes (foodResponse))
{alert ('I never get tired of' + foodResponse);}
else
{alert (foodResponse + 'isn\'t bad either.');};
console.log ('I sometimes eat' + foodResponse + 'too');


//I love sloths.
const animal  = prompt ('Do I love sloths?');
if  (animal.toLowerCase () === 'yes' || animal.toLowerCase () === 'y'){
    alert ('Sloths are so wierd.  I love them.');}
else
{alert ('who doesn/t love sloths?');
};