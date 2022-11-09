const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
let DEFUALT_USER_CHOICE;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    DEFUALT_USER_CHOICE = getComputerChoice();
    alert(`Invalid choice! We chose ${DEFUALT_USER_CHOICE} for you!`);
    return DEFUALT_USER_CHOICE;
  }

  return selection;
};

const getComputerChoice = () => {
  const randomNumber = Math.random();

  if (randomNumber < 0.333) {
    return ROCK;
  } else if (randomNumber >= 0.333 && randomNumber < 0.666) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return RESULT_PLAYER_WINS;
// } else {
//   return RESULT_COMPUTER_WINS;
// }

// const start = function() {
//   console.log('Game is starting...');
// };

// const person = {
//   name: 'Max',
//   greet: function greet() {
//     console.log('Hello there!');
//   }
// };

// person.greet();

// console.dir(startGame);

startGameBtn.addEventListener("click", () => {
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();

  const computerSelection = getComputerChoice();

  const winner = getWinner(computerSelection, playerSelection);

  let message = `You chose ${playerSelection}! and Computer chose ${computerSelection}! So you `;

  if (winner === RESULT_DRAW) {
    message = message + "have a draw.";
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + "won! I guess you just got a lucky.";
  } else {
    message = message + "lost! You such a loser.";
  }

  alert(message);
});
