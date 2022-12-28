'use strict';

var player;
var random;
var computer;

player = window.prompt('Choose', 'Rock, paper or scissors?');

player = player.toLowerCase();

random = Math.random();

if(random < 1 / 3) {
    computer = 'Rock';
}

else if(random < 2 / 3) {
    computer = 'Paper';
}

else {
    computer = 'Scissors';
}

document.write("<p>Computer's choice : <strong>" + computer + "</strong></p>");

if (player == computer) {
    document.write('That\'s a tie!');
}

else {
    switch(computer) {

        case "Rock" :

        	if (player = "Paper") {
                document.write("Congratulations! You win!")
            }

            else {
                document.write("Sorry, you lost!")
            }       
        break;

        case "Paper" :
           
            if (player = "Scissors") {
                document.write("Congratulations! You win!")
            }
            
            else {
                document.write("Sorry, you lost!")
            }
        break;
        
        case "Scissors" :
            
            if (player = "Rock") {
			    document.write("Congratulations! You win!")
		    }
           
            else {
			    document.write("Sorry, you lost!")
		    } 
        break;
    }
}
	

        
        

