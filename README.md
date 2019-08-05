# Constructor-word-guess


# THIS IS A WORD GUESS GAME THAT IS UTILIZED PRIMARILY THROUGH THE COMMAND LINE 

# The process will begin when the script "index.js" is called via 'node index.js' while in the correct file folder.

# When the file is ran there are a few functions that run immediately.

# Game function 1: startGame()
    This function runs two consecutive functions within them. The first is the 'generateWordOjb()' function. This takes an array of random words as it's argument.

    This function call will reference a block of code found in the word.js file. The generateWordObj function will determine a random number and use that to pick the word from the array. This will then create a new object called 'newWord' which will contain a myriad of different functions. 

    The next functon that's called is the promptQuestion() function. This is where the primary user experience is built in. It will start off with an inquiry for the user to guess a letter. The letter is then passed into a new 'letter object' via the newLetterObj() function. The argument for said function is the letter teh user guesses. 

    Regardless of if the user is correct or not the letter is passed into an array called lettersGuessed.

    The letter will then be passed into the playGame function as its argument. 

# Game Function 2: playGame()

    This function will take in the letter guessed by our user in via the inquiry prompt. 

    It will start off by initializing the value of guessCorrect to false so that the script may run properly. 

    It will then loop through the chosenWordArray (created within the Word object in word.js, one of its myriad of functions). If the letter matches any of the words in the array it will notify the user and assign that letter into the 'blanked out word array' aka variable: "blankSpaces" This will be done via a higher order function, splice.

    If the user is incorrect the user will be notified and they will be subtracted 1 guess. The guessRemaining variable is an integer that originates at 10. Every time the user guesses the wrong letter, that is incremented down. 

    After the correct/incorrect conditional, the game will test if the 'blankSpaces' array has been filled. It does this by testing the 'indexOf(" _ ")' the " _ " character is what fills in every spot of the blankSpaces array. If that character has been wiped out, via the user guessing all the hidden letters, then the index of that character will be -1. If the console reads a -1 as the index, it will trigger the endGame function.

    If the Index of " _ " isn't -1 it will continue to test if the guessesRemaining is > 0. If it's greater than 0, then the startGame() function is called to trigger a new turn.


# Game function 3: endGame()

    This function will console log the user that the game is over. This will then trigger a new inquiry prompt that asks the user if they want to play again.

    It provides a 'Yes' or 'No' option to the user, and if the user decides "No" the script will end completely.

    If the user selects 'Yes' then the guessesRemaining integer is reset to 10 in the index.js file. The blankSpaces array is also wiped out because otherwise it would append to itself. 

    Then the startGame() function is ran and a new 'newWord' object is built containing another randomized word!