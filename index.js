var inquirer = require("inquirer");
var letterScript = require("./letter");
var wordScript = require("./word");

var wordArry = ['apples', 'bananas', 'chocolate', "doritos", "eggplant", "fondue", "gnocchi", "hotdogs", "icecream", "jollyranchers", "kale", "lemoncello", "molasses", "nutterbutters"];
var guessedLetter = "";

var guessesRemaining = 5;
var lettersGuessed = [];

var chosenWordArray = "";
var gameOver = false;


populateBlanks = function (arr) {
    blankSpaces = arr;
}

populateArray = function (arr) {
    chosenWordArray = arr;
    populateArrayForLetterObj(arr)
}


function startGame() {

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
 
        guessedLetter = response.guess.toLowerCase();

        newLetterObj(guessedLetter);

        letterObj = newLetter.character
        newLetter.printLetter();

        lettersGuessed.push(letterObj);
        playGame(letterObj);
    })
}


playGame = function () {
    guessCorrect = false;

    newLetter.readCharacter();

    if (guessCorrect === false) {
        console.log("That was incorrect, sorry please guess again!")
        guessesRemaining--;
        console.log(`You have ${guessesRemaining} left!`);
        console.log("---------------------------------------------")
    }

    if (blankSpaces.indexOf(" _ ") === -1) {
        console.log("---------------------------------------------")
        console.log("Congratulations you have won!");
        console.log("Congratulations you have won!");
        console.log("Congratulations you have won!");
        console.log("---------------------------------------------")
        endGame();

    } else {
        console.log(`The current word status is: ${blankSpaces}`);
        console.log("---------------------------------------------")
        if (guessesRemaining > 0) {
            promptQuestion();
        } else {
            console.log("---------------------------------------------")
            console.log("You have lost!");
            console.log("You have lost!");
            console.log("You have lost!");
            console.log("---------------------------------------------")
            endGame();
        }
    }
  
}



startGame();



endGame = function () {
    console.log("The game is over!");
    console.log("---------------------------------------------")
    inquirer.prompt([
        {
            type: "list",
            choices: ["Yes", "No"],
            message: "Would you like to play again?",
            name: "replay"
        }
    ]).then(function (response) {
        if (response.replay === "Yes") {
            guessesRemaining = 5;
            startGame();
        }
    })

}