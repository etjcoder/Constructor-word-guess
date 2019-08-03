var letterScript = require('./letter')
var index = require('./index')

var wordArry = ['apples', 'bananas', 'chocolate', "doritos", "eggplant"];



var blankSpaces = [];
var chosenWordArray = [];





generateWordObj = function(wordArr){
    var randomNum = Math.floor(Math.random()*5);
    var newWord = new Word(wordArr[randomNum])

        newWord.readWord(newWord.word)
        blankSpaces = [];
        newWord.printBlanks();
        newWord.splitWord();
}


function Word(wordArr){
    this.word = wordArr;
    this.printWord = function(x){
        console.log("You've ran printWord function");
        console.log("The letter guessed is: " + x);
    };
    this.readWord = function(x){
        console.log("You've ran the read word function");
        console.log(`The word the user will be guessing is ${x}`)
    };
    this.printBlanks = function(){
        wordLength = this.word.length;
        // console.log(wordLength);
        for (i = 0; i < wordLength; i++){
            blankSpaces.push(" _ ");
        }
        console.log("The length of the word is: " + wordLength + " letters");
        console.log(`The letters avaible to guess are: ${blankSpaces}`);
        populateBlanks(blankSpaces);
    };
    this.splitWord = function(){
        chosenWordArray = this.word.split("");
        console.log(chosenWordArray);
        populateArray(chosenWordArray);
    }
};


// generateWordObj(wordArry);