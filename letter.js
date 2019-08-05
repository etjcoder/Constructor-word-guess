var index = require("./index")
var word = require("./word")

populateArrayForLetterObj = function (arr) {
    chosenWordArray = arr;
}

function Letter(character) {
    this.character = character;
    this.guessed = false;
    this.printLetter = function () {
        console.log("---------------------------------------------")
        console.log("You have guessed " + newLetter.character)
        console.log("---------------------------------------------")
    };
    this.readCharacter = function () {

        for (i = 0; i < chosenWordArray.length; i++) {
            if (newLetter.character === chosenWordArray[i]) {
                console.log("You've guessed correctly! " + newLetter.character + " is at index: " + i);
                blankSpaces.splice(i, 1, newLetter.character);
                guessCorrect = true;
                console.log("---------------------------------------------")
            }

        }
    };
}

newLetterObj = function (letter) {
    
    newLetter = new Letter(letter);

    return newLetter;
}