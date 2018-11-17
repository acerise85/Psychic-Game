
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var win = 0;
var lose = 0;
var guesses = 10;
var lettersChosen = [];

//random letter chooser for computerSelection, working correctly
var computerSelection = letters[Math.floor(Math.random() * letters.length)];



//game start key event
    document.onkeyup = function (start){
        console.log(start);

//start game event and possible userGuess onkeyup event, might need another onkey event, for loop preferable
        var userGuess = start.key.toLocaleLowerCase();

    //aray to store guessed letters
        for (var a = 0; a < letters.length; a++){
            if (userGuess === letters[a]){
                //Check


                 //if statement to see if userGuess matches the computerSelection
        if ( userGuess === computerSelection){

            win++;
            document.getElementById('win').innerHTML = win;
            
    
            // location.reload();
            computerSelection = letters[Math.floor(Math.random() * letters.length)];
            guesses = 10;
            console.log(userGuess);

        }
        //else statment for when userGuess does not match computerSelection the letters go to an array to display letters already chosen
        else {

            lettersChosen.push(userGuess);
            guesses--;
            console.log(lettersChosen);
            
            document.getElementById("lettersChosen").innerHTML = lettersChosen.toString();
            document.getElementById('lose').innerHTML = lose;
            document.getElementById('guesses').innerHTML = guesses;
            console.log(computerSelection);
        }

        
    //if statment to subtract number of guesses on wrong answer and let user know they lost round
        
            
           if (guesses === 0){

            lose++;
            
            computerSelection = letters[Math.floor(Math.random() * letters.length)];
            guesses = 10;
            // location.reload();
           }

    }


















            }


        }

       
       








