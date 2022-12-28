'use strict';

var player;
var random;
var computer;

player = window.prompt('Rock, paper or scissors?');

player = player.toLowerCase();

if (player == "rock" || player == "paper" || player == "scissors") {

    random = 0.76;

    if(random < 1 / 3) {
        computer = 'rock';
    }

    else if(random < 2 / 3) {
        computer = 'paper';
    }

    else {
        computer = 'scissors';
    }

    document.write("Computer chose <strong>" + computer.charAt(0).toUpperCase()
    + computer.slice(1) + "</strong> <br /><br /> You chose <strong>" + player.charAt(0).toUpperCase()
+ player.slice(1) + "</strong> <br /><br />")



    if (player == computer) {
        document.write('That\'s a tie!');
    }

    else {
        switch(computer) {

            case "rock" :

        	if (player == "paper") {
                document.write("Congratulations!" + "<strong>You win!</strong>")
            }

            else {
                document.write("Sorry, you lost!")
            }       
        break;

        case "paper" :
           
            if (player == "scissors") {
                document.write("Congratulations!" + "<strong>You win!</strong>")
            }
            
            else {
                document.write("Sorry, you lost!")
            }
        break;
        
        case "scissors" :
            
            if (player == "rock") {
                document.write("Congratulations!" + "<strong>You win!</strong>")
		    }
           
            else {
			    document.write("Sorry, you lost!")
		    } 
        break;
    }
}
}

    else {
    window.alert(Error('Invalid choice, please try again!'))
    location.reload()
    }
	

        
        

