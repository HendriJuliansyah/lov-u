const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionText = document.getElementById("questionText");

let clickCount = 0;
let fallingHeartInterval = null;

const texts = [
  "Do you love me?",
  "Are you sure?",
  "Really sure?",
  "Please say yes 😢",
  "Don't do this to me 💔",
  "I'm gonna cry 😭",
  "Last chance!",
  "Just click Yes 😤",
  "You have no choice 😆",
  "Choose Yes now ❤️"
];

window.onload = function () {
  noBtn.style.left = "calc(50% + 10px)";
  noBtn.style.top = "0px";
};

function moveNoButton(event) {
  if (event) {
    event.preventDefault();
  }

  clickCount++;

  const padding = 20;
  const maxX = Math.max(window.innerWidth - noBtn.offsetWidth - padding, padding);
  const maxY = Math.max(window.innerHeight - noBtn.offsetHeight - padding, padding);

  const randomX = Math.floor(Math.random() * (maxX - padding)) + padding / 2;
  const randomY = Math.floor(Math.random() * (maxY - padding)) + padding / 2;

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  if (clickCount < texts.length) {
    questionText.innerText = texts[clickCount];
  }

  enlargeYesButton();
}

function enlargeYesButton() {
  const newWidth = 95 + clickCount * 45;
  const newHeight = 48 + clickCount * 22;
  const newFontSize = 18 + clickCount * 3;

  yesBtn.style.width = newWidth + "px";
  yesBtn.style.height = newHeight + "px";
  yesBtn.style.fontSize = newFontSize + "px";
  yesBtn.style.borderRadius = "25px";

  if (clickCount >= 10) {
    noBtn.style.display = "none";

    questionText.innerText = "Now click Yes ❤️";

    yesBtn.style.position = "fixed";
    yesBtn.style.top = "0";
    yesBtn.style.left = "0";
    yesBtn.style.width = "100vw";
    yesBtn.style.height = "100vh";
    yesBtn.style.borderRadius = "0";
    yesBtn.style.fontSize = "55px";
    yesBtn.style.zIndex = "999";
    yesBtn.innerHTML = "YES ❤️";
  }
}

function showResult() {
  document.body.style.background =
    "linear-gradient(135deg, #ff9acb, #ff5fa2)";

  document.getElementById("question").style.display = "none";
  document.getElementById("result").style.display = "block";

  for (let i = 0; i < 30; i++) {
    createPopHeart();
  }

  if (!fallingHeartInterval) {
    fallingHeartInterval = setInterval(createHeart, 450);
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

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton, { passive: false });
yesBtn.addEventListener("click", showResult);