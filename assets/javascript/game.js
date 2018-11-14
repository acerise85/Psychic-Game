
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var win = 0;
var lose = 0;
var guesses = 10;

var computerSelection = letters[Math.floor(Math.random() * letters.length)];





document.onkeyup = function (start){
    console.log(start);

    var userGuess = start.key.toLocaleLowerCase();
    var lettersChosen = [];
    // var userGuess = document.getElementById("userGuess");

        //Need for loop to keep game looping until the userGuess = 
    
        console.log(userGuess);

        

        if ( userGuess === computerSelection){

            document.write("You guessed correctly!");

            win++;

        }
        else {

            document.write("Try again!")

            lettersChosen.push([]);

            guesses--;
            console.log(computerSelection);
        }

        

        if (guesses === 0){

            document.write("Sorry Game Over! The correct letter was: " + computerSelection);

            
        }

    

}








