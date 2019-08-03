var inquirer = require("inquirer");
var letterScript = require("./letter");
var wordScript = require("./word");

var wordArry = ['apples', 'bananas', 'chocolate', "doritos", "eggplant"];
var guessedLetter = "";

var guessesRemaining = 10;
var lettersGuessed = [];

var chosenWordArray = "";
var gameOver = false;


populateBlanks = function (arr) {
    blankSpaces = arr;
}

populateArray = function (arr) {
    chosenWordArray = arr;
}


function startGame() {
    //Gather the word that we want
    generateWordObj(wordArry);
    promptQuestion()
    gameOver = false;
}

promptQuestion = function () {
    inquirer.prompt([
        {
            type: "input",
            name: "guess",
            message: "What letter would you like to guess?"
        }

    ]).then(function (response) {
        // console.log(response.guess);
        guessedLetter = response.guess.toLowerCase();
        console.log("------------------------------------")
        console.log("The user guessed: " + guessedLetter);
        console.log("------------------------------------")
        newLetterObj(guessedLetter);
        lettersGuessed.push(guessedLetter);
        playGame(guessedLetter);
    })
}

playGame = function (letter) {
    guessCorrect = false;
    if (guessesRemaining > 0 && gameOver === false) {

        for (i = 0; i < chosenWordArray.length; i++) {

            if (letter === chosenWordArray[i]) {
                console.log("You've guessed correctly! " + letter + " is at index: " + i);
                blankSpaces.splice(i, 1, letter);
                guessCorrect = true;
                console.log("------------------------------------")
            } 
        }

        if(guessCorrect === false){
            console.log("That was incorrect, sorry please guess again!")
            guessesRemaining--;
            console.log(`You have ${guessesRemaining} left!`);
            console.log("-----------------------------------------")
        }

        if (blankSpaces.indexOf(" _ ") === -1) {
            console.log("Congratulations you have won!");
            console.log("Congratulations you have won!");
            console.log("Congratulations you have won!");
            endGame();

        } else {
            console.log(`The current word status is: ${blankSpaces}`);
            console.log("--------------------------------------");
            if(guessesRemaining > 0){
            promptQuestion();
            } else {
                endGame();
            }
        }

    }

}

startGame();



endGame = function(){
    console.log("The game is over!");
    console.log("---------------------------------------------------")
    inquirer.prompt([
        {
            type: "list",
            choices: ["Yes", "No"],
            message: "Would you like to play again?",
            name: "replay"
        }
    ]).then(function(response){
        if (response.replay === "Yes"){
            guessesRemaining = 10;
            startGame();
        }
    })
    
}