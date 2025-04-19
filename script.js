// Add this to your win condition logic
function celebrate() {
  const colors = ["#ff6b6b", "#48dbfb", "#feca57", "#1dd1a1"];
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      top: -10px;
      left: ${Math.random() * 100}vw;
      animation: fall linear ${Math.random() * 3 + 2}s forwards;
    `;
    document.body.appendChild(confetti);

    // Remove after animation
    setTimeout(() => confetti.remove(), 5000);
  }
}

// Step 1 - Grab the necessary elements including the values of the buttons based on their ids
// Step 2 - create a method to display the selected choice in the user display
// Step 3 - create a method to generate random number between 1-3 so that the pc picks up a choice with it
// Step 4 - display the computer choice in the computer choice
// Step 5 - make a method so that if both the choices are same it will be draw and according to the games -- winning or loosing
const UserChoiceDisplay = document.getElementById("user-choice");
const ComputerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    UserChoiceDisplay.innerHTML = userChoice;

    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "scissors";
  }

  ComputerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "its a draw!";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "you win!";
    celebrate();
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "you lost!";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "you win!";
    celebrate();
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "you lose!";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "you win!";
    celebrate();
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "you lose!";
  }
  resultDisplay.innerHTML = result;
}
