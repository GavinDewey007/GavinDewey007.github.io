 TODO 1: Practice changing the case of strings
    - With the first letter of every word capitalized, it makes it too easy to play. When scrambled the word should either be all upper or lower case
    - HINT: the variable that hold the word that will be scrambled is called "selectedWord"

  TODO 2: JS is case sensitive. -- Remember how I showed  "ken" and "Ken" are not the same.
    - When checking your answer, the comparision is case sensitive. You should make sure that the cases are the same.
    - To do this, locate where the code is COMPARING the selected word to the value in the form field and set them both to either upper or lower case

  TODO 3: Clean up the user input. This is an important step in every script that processes user submitted data.
   - Sometimes users accidently add a space to the end of their words so while they mean to submit the string "pumpkin" they actually submit "pumpkin " -- not the space at the end.
   - Go to the online docs, under strings and look up the .trim() function. 

  TODO 4: Right now you have to reload the page each time. That means the game really can't keep score. Alter the code so that when the player successfully unscrambles a word the game will call the nextWord function.  
    - Move the variable allWords into the nextWord() function
    - Move the code that picks a random word into the nextWord() function
    - Move the code that writes a scrambled word to screen into the nextWord() function
