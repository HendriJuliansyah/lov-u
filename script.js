const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionText = document.getElementById("questionText");

let clickCount = 0;
let yesScale = 1;

const texts = [
  "Do you love me?",
  "Are you sure?",
  "Really sure?",
  "Please say yes 😢",
  "Don't do this to me 💔",
  "I'm gonna cry 😭",
  "Last chance!",
  "Just click Yes 😤"
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

  yesScale += 0.25;

  if (yesScale > 4) {
    yesScale = 4;
  }

  yesBtn.style.transform = `scale(${yesScale})`;

  if (clickCount < texts.length) {
    questionText.innerText = texts[clickCount];
  }
}

function showResult() {
  document.getElementById("question").style.display = "none";
  document.getElementById("result").style.display = "block";

  for (let i = 0; i < 25; i++) {
    createPopHeart();
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 15 + 15 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

function createPopHeart() {
  const heart = document.createElement("div");
  heart.classList.add("pop-heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = Math.random() * 100 + "vh";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1500);
}

setInterval(createHeart, 500);

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);
yesBtn.addEventListener("click", showResult);