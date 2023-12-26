// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Initialize variables for user input and number of guesses
let guess = 0;
let numberOfGuesses = 0;

// Function to get user input from the console
function getUserInput() {
  process.stdin.resume(); // Resume stdin to handle input
  process.stdin.setEncoding("utf8"); // Set encoding to UTF-8

  process.stdin.on("data", (data) => {
    guess = parseInt(data.trim(), 10); // Parse input as an integer
    checkGuess();
  });
}

// Function to check the user's guess
function checkGuess() {
  numberOfGuesses++;

  if (guess === secretNumber) {
    console.log(
      "Congratulations! You guessed the number in",
      numberOfGuesses,
      "guesses!"
    );
  } else if (guess > secretNumber) {
    console.log("Too high! Try again.");
    getUserInput();
  } else {
    console.log("Too low! Try again.");
    getUserInput();
  }
}

// Start the game
console.log("Guess a number between 1 and 100:");
getUserInput();
