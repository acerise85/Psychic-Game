
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var win = 0;
var lose = 0;
var guesses = 10;

//random letter chooser for computerSelection, working correctly
var computerSelection = letters[Math.floor(Math.random() * letters.length)];





document.onkeyup = function (start){
    console.log(start);

    //start game event and possible userGuess onkeyup event, might need another onkey event, for loop preferable
    var userGuess = start.key.toLocaleLowerCase();

    //aray to store guessed letters
    var lettersChosen = [];
    // var userGuess = document.getElementById("userGuess");

        //Need for loop to keep game looping until the userGuess = the computerSelection or guesses == 0, initial comparison works but game does not continue after one onkeyup event
    
        console.log(userGuess);

        
        //if statement to see if userGuess matches the computerSelection
        if ( userGuess === computerSelection){

            document.write("You guessed correctly!");

            

        }
        //else statment for when userGuess does not match computerSelection
        else {

            document.write("Try again!")

            lettersChosen.push([]);

            
            console.log(computerSelection);
        }

        
            //if statment 
        // if (guesses === 0){

            // document.write("Sorry Game Over! The correct letter was: " + computerSelection);
            

}








