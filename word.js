var letterScript = require('./letter')
var index = require('./index')

var blankSpaces = [];
var chosenWordArray = [];

generateWordObj = function(wordArr){
    var randomNum = Math.floor(Math.random()*14);
    var newWord = new Word(wordArr[randomNum])

        blankSpaces = [];
        newWord.printWord();
        newWord.readWord();

}

function Word(wordArr){
    this.word = wordArr;
    this.printWord = function(x){
        // console.log("You've ran printWord function");
        chosenWordArray = this.word.split("");
        // console.log(chosenWordArray);
        populateArray(chosenWordArray);
    };
    this.readWord = function(){
        wordLength = this.word.length;
        // console.log(wordLength);
        for (i = 0; i < wordLength; i++){
            blankSpaces.push(" _ ");
        }
        console.log("The length of the word is: " + wordLength + " letters");
        console.log(`The letters avaible to guess are: ${blankSpaces}`);
        populateBlanks(blankSpaces);
    };
};

