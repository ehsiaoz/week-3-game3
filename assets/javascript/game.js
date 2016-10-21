//Variables
//==============================================================================

	var heroList = [
		"superman",
		"batman",
		"spiderman",
		"wolverine",
		"flash",
		"batgirl",
		"robin"];

	var guessedLetters;

	var incorrectGuesses;

	var correctGuess;

	var guessesLeft;

	var winCount;

	var blankLetters;

	var randomHero;

	var heroLetters;

	var blankLetters;
	

//Functions ===========================================================================

function startGame() {

	//The below function randomly selects a hero name for the user to guess from the possible list of heroes
	randomHero = heroList[Math.floor(Math.random() * heroList.length)];
		console.log("This is random superhero: "+ randomHero);

	//The .split("") method separates the letters from the superhero's name and puts the letters into an array
	heroLetters = randomHero.split("");
		console.log("These are the letters that make up the superhero: " + heroLetters);
		console.log("This is the # of letters in heroLetters: " + heroLetters.length);

	guessedLetters = [];

	incorrectGuesses = [];

	guessesLeft = 15;

	winCount = 0;

	blankLetters = heroLetters.map(function(x) {
		return "_ ";
	});

	// //display the list of guessed letters in the DOM
	// document.getElementById("currentWord").innerHTML = blankLetters.join(" ");
	// //display the list of guessed letters in the DOM
	// document.getElementById("displayIncorrectGuesses").innerHTML = incorrectGuess;

	// //display the number of guesses remaining
	// document.getElementById("guessesLeft").innerHTML = guessesLeft;

	// console.log(heroLetters);
}

function restartGameWin() {

	//The below function randomly selects a hero name for the user to guess from the possible list of heroes
	randomHero = heroList[Math.floor(Math.random() * heroList.length)];
		console.log("This is random superhero: "+ randomHero);

	//The .split("") method separates the letters from the superhero's name and puts the letters into an array
	heroLetters = randomHero.split("");
		console.log("These are the letters that make up the superhero: " + heroLetters);
		console.log("This is the # of letters in heroLetters: " + heroLetters.length);

	guessedLetters = [];

	incorrectGuesses = [];

	guessesLeft = 15;

	winCount = winCount + 1;

	blankLetters = heroLetters.map(function(x) {
		return "_ ";
	});

}


function restartGameLose() {


	//The below function randomly selects a hero name for the user to guess from the possible list of heroes
	randomHero = heroList[Math.floor(Math.random() * heroList.length)];
		console.log("This is random superhero: "+ randomHero);

	//The .split("") method separates the letters from the superhero's name and puts the letters into an array
	heroLetters = randomHero.split("");
		console.log("These are the letters that make up the superhero: " + heroLetters);
		console.log("This is the # of letters in heroLetters: " + heroLetters.length);

	guessedLetters = [];

	incorrectGuesses = [];

	guessesLeft = 15;

	winCount = winCount;

	blankLetters = heroLetters.map(function(x) {
		return "_ ";
	});

}

//check it two arrays are equal
function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}



//=========================================================================


//Press any key to start the game
document.onkeypress = function(){

	document.getElementById("start").style.visibility = "hidden";
	//display the list of guessed letters in the DOM
	document.getElementById("winsText").innerHTML = "# of Wins: " + winCount;
	//display the list of guessed letters in the DOM
	document.getElementById("wordText").innerHTML = "Name of Superhero:";
	document.getElementById("wordValue").innerHTML = blankLetters.join(" ");
	//display the number of guesses remaining
	document.getElementById("guessesText").innerHTML = "Number of guesses remaining:";
	document.getElementById("guessesValue").innerHTML = guessesLeft;

	//display the list of guessed letters in the DOM
	document.getElementById("incorrectGuessesText").innerHTML = "Incorrectly guessed letters:";
	document.getElementById("incorrectGuessesValue").innerHTML = incorrectGuesses;

	//Capture the user's keystroke and convert it to a character
	document.onkeypress = function(event) {

		var x = event.charCode || event.keyCode;  
		var userGuess = String.fromCharCode(x).toLowerCase(); 
		console.log("This is the letter that the user just guessed: " + userGuess);


		if (guessesLeft > 1 && arraysEqual(heroLetters, blankLetters) !== true) {

			var alreadyGuessed = guessedLetters.indexOf(userGuess);
			console.log("This is the value of alreadyGuessed: " + alreadyGuessed + ". If alreadyGuessed does not equal -1 the letter has ALREADY been guessed. If -1 then letter will be added to guessed list");

			var letterInWord = heroLetters.indexOf(userGuess);
			console.log("This is the value of letterInWord: " + letterInWord + ". If letterInWord does not equal -1 the letter letter is in the active word. If -1 then letter will be added to incorrectGuesses list");			

				//if user guess is a new guess
				if (alreadyGuessed == -1) {
					//take user guess and put it in the guessedLetters array
					guessedLetters.push(String.fromCharCode(x));
					console.log("this is the array of guessedLetters: " + guessedLetters);

					if (letterInWord == -1) {
						//take user guess and put it in the guessedLetters array
						incorrectGuesses.push(String.fromCharCode(x));
						console.log("this is the array of guessedLetters: " + incorrectGuesses);
					}
					
					if (letterInWord !==-1) {
						for (i=0; i < heroLetters.length; i++) {

							if (userGuess == heroLetters[i]) {
								blankLetters[i] = userGuess;
								console.log("This is the heroLetter array: " + heroLetters);
								console.log("This is the blankLetters array: " + blankLetters);
								document.getElementById("wordValue").innerHTML = blankLetters.join("");
							}
						}

					}
					
					//decrease available guesses
					guessesLeft = guessesLeft - 1;
					console.log("# of guesses remaining: " + guessesLeft);
				}

				if (alreadyGuessed !== -1) {
					alert(userGuess + " has already been guessed");
				}
		}

		if (guessesLeft == 1 && arraysEqual(heroLetters, blankLetters) !== true) {

			var alreadyGuessed = guessedLetters.indexOf(userGuess);
			console.log("This is the value of alreadyGuessed: " + alreadyGuessed + ". If alreadyGuessed does not equal -1 the letter has ALREADY been guessed. If -1 then letter will be added to guessed list");

			var letterInWord = heroLetters.indexOf(userGuess);
			console.log("This is the value of letterInWord: " + letterInWord + ". If letterInWord does not equal -1 the letter letter is in the active word. If -1 then letter will be added to incorrectGuesses list");			

				//if user guess is a new guess
				if (alreadyGuessed == -1) {
					//take user guess and put it in the guessedLetters array
					guessedLetters.push(String.fromCharCode(x));
					console.log("this is the array of guessedLetters: " + guessedLetters);
					//decrease available guesses
					guessesLeft = guessesLeft - 1;

					if (letterInWord == -1) {
						//take user guess and put it in the guessedLetters array
						incorrectGuesses.push(String.fromCharCode(x));
						console.log("this is the array of guessedLetters: " + incorrectGuesses);

						alert("You Lose! Try Again");
						restartGameLose();
					}
					
					// if (letterInWord !==-1) {
					// 	for (i=0; i < heroLetters.length; i++) {

					// 		if (userGuess == heroLetters[i]) {
					// 			blankLetters[i] = userGuess;
					// 			console.log("This is the heroLetter array: " + heroLetters);
					// 			console.log("This is the blankLetters array: " + blankLetters);
					// 			document.getElementById("wordValue").innerHTML = blankLetters.join("");
					// 		}
					// 	}

					// }
					
					
					// console.log("# of guesses remaining: " + guessesLeft);
				}

		// else if (guessesLeft == 0 && arraysEqual(heroLetters, blankLetters) !== true) {
		// 	alert("You Lose! Better luck next time!");
		// 	restartGameLose();
		}

		else if (arraysEqual(heroLetters, blankLetters) == true) {
			alert(randomHero.toUpperCase() + " is correct! Good job!");
			restartGameWin();
		}


		

//<p style="font-weight: bold" id="start">Press any key to get started</p>

	document.getElementById("start").style.visibility = "hidden";
	//display the list of guessed letters in the DOM
	document.getElementById("winsText").innerHTML = "# of Wins: " + winCount;
	//display the list of guessed letters in the DOM
	document.getElementById("wordText").innerHTML = "Name of Superhero:";
	document.getElementById("wordValue").innerHTML = blankLetters.join(" ");
	//display the number of guesses remaining
	document.getElementById("guessesText").innerHTML = "Number of guesses remaining:";
	document.getElementById("guessesValue").innerHTML = guessesLeft;

	//display the list of guessed letters in the DOM
	document.getElementById("incorrectGuessesText").innerHTML = "Incorrectly guessed letters:";
	document.getElementById("incorrectGuessesValue").innerHTML = incorrectGuesses;
	

	}
}

startGame();