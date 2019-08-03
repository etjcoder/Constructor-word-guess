var index = require("./index")
var word = require("./word")

function Letter(character) {
    this.character = character;
    this.guessed = false;
    this.printLetter = function(x){
        console.log("printLetter function ran!")
    };
    this.readCharacter = function(x){
        console.log("readCharacter function ran!")
    };
}

newLetterObj = function(letter){

    var newLetter = new Letter(letter);
    // console.log(newLetter);
}