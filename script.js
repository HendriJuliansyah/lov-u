const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionText = document.getElementById("questionText");

let clickCount = 0;
let yesScale = 1;

const texts = [
  "Do you love me?",
  "Are you sure?",
  "Really sure?",
  "Please say yes",
  "Don't do this to me",
  "I'm gonna cry",
  "Last chance"
];

window.onload = function () {
  noBtn.style.left = "calc(50% + 10px)";
  noBtn.style.top = "0px";
};

function moveNoButton() {
  clickCount++;

  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  yesScale += 0.2;

  if (yesScale > 3) {
    yesScale = 3;
  }

  yesBtn.style.transform = `scale(${yesScale})`;

  if (clickCount < texts.length) {
    questionText.innerText = texts[clickCount];
  }
}

function showResult() {
  document.getElementById("question").style.display = "none";
  document.getElementById("result").style.display = "block";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);
yesBtn.addEventListener("click", showResult);