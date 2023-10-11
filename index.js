function scuberGreetingForFeet(ride){
  let freeSample = 'This one is on me!'
  let firstPrice = 'That will be twenty bucks.'
  let nextPrice = 'I will gladly take your thirty bucks.'
  let lastPrice = 'No can do.'
if (ride <= 400){return freeSample} if (ride <2000){return firstPrice} if(ride <= 2500){return nextPrice} else{return lastPrice}

}

function ternaryCheckCity(city){
let myCity = 'Ok, sounds good.'
let noNyc = 'NYC'
let noCity = "No go."
return city === noNyc? myCity: noCity
}

function switchOnCharmFromTip(tip){

switch(tip) {
case "generous" : return 'Thank you so much.'; break;
case 'not as generous' : return 'Thank you.'; break;
default: return'Bye.'; break;
}
 

}
