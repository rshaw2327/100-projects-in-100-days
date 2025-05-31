import randomPara from "./randomPara.js";

const typingText = document.querySelector(".typing-text");
const inputField = document.getElementById("textInput");
const mistakeTag = document.querySelector(".mistake");
const timeTag = document.querySelector(".time-left");
const cpmTag = document.querySelector(".cpm");
const wpmTag = document.querySelector(".wpm");
const tryAgainBtn = document.querySelector(".btn");

let charIndex = 0;
let mistake = 0;
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let istyping = 0;

function randomParagraphs() {
  let randIndex = Math.floor(Math.random() * randomPara.length);
  console.log(randomPara[randIndex]);

  // typingText.innerHTML = randomPara[randIndex];
  randomPara[randIndex].split("").forEach((span) => {
    let spanTag = `<span>${span}</span>`;
    typingText.innerHTML += spanTag;
    console.log(spanTag);
  });

  document.addEventListener("keydown", () => inputField.focus());
  typingText.addEventListener("click", () => inputField.focus());
}

function initTyping() {
  const characters = typingText.querySelectorAll("span");
  let typedChar = inputField.value.split("")[charIndex];
  if (!istyping) {
    timer = setInterval(initTimer, 1000);
    istyping = true;
  }

  if (typedChar == null) {
    charIndex--;
    if (characters[charIndex].classList.contains("incorrect")) {
      mistake--;
    }
    characters[charIndex].classList.remove("correct", "incorrect");
  } else {
    if (characters[charIndex].innerText === typedChar) {
      characters[charIndex].classList.add("correct");
    } else {
      mistake++;
      characters[charIndex].classList.add("incorrect");
    }
    charIndex++;
  }

  characters.forEach((span) => span.classList.remove("active"));
  characters[charIndex].classList.add("active");

  let wpm = Math.round(((charIndex - mistake) / 5 / (maxTime - timeLeft)) * 60);
  wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
  mistakeTag.innerText = mistake;
  wpmTag.innerText = wpm;
  cpmTag.innerText = charIndex - mistake;
}

function initTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    timeTag.innerText = timeLeft;
  } else {
    clearInterval(timer);
  }
}

function resetGame() {
  typingText.innerHTML = "";
  randomParagraphs();
  inputField.value = "";
  clearInterval(timer);
  timeLeft = maxTime;
  (maxTime = 0), (charIndex = 0);
  mistake = 0;
  istyping = false;
  timeTag.innerText = timeLeft;
  mistakeTag.innerHTML = 0;
  wpmTag.innerText = 0;
  cpmTag.innerText = 0;
}
randomParagraphs();
inputField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);
