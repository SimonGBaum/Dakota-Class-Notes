
console.log("guessing game connected");

// -----------------------
// 1. Application state
// -----------------------
// State means: data the app needs to remember while it is running.
let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
let gameOver = false;

// For demo/debugging only. 
console.log("Secret number:", secretNumber);

// -----------------------
// 2. DOM selections
// -----------------------
const guessForm = document.querySelector("#guess-form");
const guessInput = document.querySelector("#guess-input");
const message = document.querySelector("#message");
const attemptsText = document.querySelector("#attempts");
const resetButton = document.querySelector("#reset-button");

// -----------------------
// 3. Helper functions
// -----------------------
const updateMessage = (text, className) => {
  message.innerText = text;

  // Reset the message classes before adding the current state class.
  message.className = "message";

  if (className) {
    message.classList.add(className);
  }
};

const updateAttempts = () => {
  attemptsText.innerText = `Attempts: ${attempts}`;
};

const resetGame = () => {
  secretNumber = Math.floor(Math.random() * 10) + 1;
  attempts = 0;
  gameOver = false;

  guessInput.value = "";
  guessInput.disabled = false;

  updateAttempts();
  updateMessage("Enter a number and submit your guess.");

  console.log("New secret number:", secretNumber);
};

// -----------------------
// 4. Event handlers
// -----------------------
const handleGuessSubmit = (event) => {
  event.preventDefault();

  if (gameOver) {
    return;
  }

  // Input values come from the DOM as strings, so convert to a number.
  const guess = Number(guessInput.value);
  attempts += 1;
  updateAttempts();

  if (guess === secretNumber) {
    updateMessage(`Correct! The number was ${secretNumber}.`, "win");
    gameOver = true;
    guessInput.disabled = true;
  } else if (guess < secretNumber) {
    updateMessage("Too low. Try again.", "low");
  } else {
    updateMessage("Too high. Try again.", "high");
  }

  guessInput.value = "";
  guessInput.focus();
};

// -----------------------
// 5. Connect events
// -----------------------
guessForm.addEventListener("submit", handleGuessSubmit);
resetButton.addEventListener("click", resetGame);
