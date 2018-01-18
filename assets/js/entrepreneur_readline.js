var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function callback(answer) {
politician.Name = answer    
console.log('Your pet is now named', answer);
	askQuest();
}

function askQuest(){
	rl.question('What would you like to do with your politician?', callback2);
}
function callback2(answer) {
	if(answer === 'play'){
		play(politician)
		askQuest()
	}else if (answer === 'feed'){
		feed(politician)
		askQuest()
  }else if (answer === 'sleep'){
		sleep(politician)
		askQuest()
	}else if(answer === 'quit'){
  rl.close() 
 }else{
   console.log('Unfortunately you cannot do that with your politician. TYPE play, feed or sleep to interact with your politician. Otherwise type quit to end the game.') 
  //askQuest()
 }
} 

rl.question('What would you like to name your pet?', callback);
