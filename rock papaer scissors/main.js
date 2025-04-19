const signs = [
  {
    icon: '<i class="fa-solid fa-hand-fist"></i>',
    name: "Rock",
  },
  {
    icon: '<i class="fa-solid fa-hand"></i>',
    name: "Paper",
  },
  {
    icon: '<i class="fa-solid fa-hand-scissors"></i>',
    name: "Scissor",
  },
];

let computerScore = 0;
let userScore = 0;

const gameBtnEls = document.querySelectorAll(".game-btns button");

const userBtnEl = document.querySelector(".user-btn");

const computerBtnEl = document.querySelector(".computer-btn");

const user = document.querySelector(".user");

const comp = document.querySelector(".comp");

gameBtnEls.forEach(addListners);

function addListners(gameBtnEl) {
  gameBtnEl.addEventListener("click", function (event) {
    let i = event.target.dataset.index;

    userBtnEl.innerHTML = `
      ${signs[i].icon}
      <span>${signs[i].name}</span>
    `;

    let random = Math.floor(Math.random() * 3);
    computerBtnEl.innerHTML = `
      ${signs[random].icon}
      <span>${signs[random].name}</span>
    `;

    decideWinner(Number(i), random);
  });
}

function decideWinner(user, comp) {
  if (user == comp) {
    updateScore("tie");
  } else {
    if (user == 0 && comp == 1) {
      updateScore("comp");
    } else if (user == 0 && comp == 2) {
      updateScore("user");
    } else if (user == 1 && comp == 0) {
      updateScore("user");
    } else if (user == 1 && comp == 2) {
      updateScore("comp");
    } else if (user == 2 && comp == 0) {
      updateScore("comp");
    } else if (user == 2 && comp == 1) {
      updateScore("user");
    }
  }
}

function updateScore(won) {
  if (won == "user") {
    userScore++;
    document.querySelector(".who-won").innerHTML = "Who won: User";
    document.querySelector(".user-score").innerHTML = "User: " + userScore;
  } else if (won == "comp") {
    computerScore++;
    document.querySelector(".who-won").innerHTML = "Who won: Computer";
    document.querySelector(".comp-score").innerHTML =
      "Computer: " + computerScore;
  } else {
    document.querySelector(".who-won").innerHTML = "Who won: Tie";
  }
}
