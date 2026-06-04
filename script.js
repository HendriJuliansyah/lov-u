const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionText = document.getElementById("questionText");

let clickCount = 0;
let fallingHeartInterval = null;

const texts = [
  "Beneran Nih?",
  "Beneran?",
  "Klik Yes Aja Dong😢",
  "Jangan Kek Gitu Dong 💔",
  "Jadi Pengen Nangis Aku 😭",
  "Terakhir Nih!",
  "Klik Yes Aja Dong 😤",
  "Cuma Bisa Yes Wkwkwk 😆",
  "Pilih Yes Ngak Sekarang! ❤️"
];

const noTexts = [
  "Gak",
  "Coba Lagi",
  "Jangan Lambat Wkwk",
  "Wkwkwk",
  "Yahaha Gabisa Di Klik",
  "Upsssss",
  "Wleee",
  "Wkwkwk"
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

  const padding = 25;
  const maxX = Math.max(window.innerWidth - noBtn.offsetWidth - padding, padding);
  const maxY = Math.max(window.innerHeight - noBtn.offsetHeight - padding, padding);

  const randomX = Math.floor(Math.random() * (maxX - padding)) + padding / 2;
  const randomY = Math.floor(Math.random() * (maxY - padding)) + padding / 2;

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  if (clickCount <= texts.length) {
    questionText.innerText = texts[clickCount - 1];
  }

  noBtn.innerText = noTexts[clickCount % noTexts.length];
  noBtn.style.minWidth = "95px";
  noBtn.style.width = "fit-content";

  noBtn.classList.add("shake");
  setTimeout(() => {
    noBtn.classList.remove("shake");
  }, 300);

  createMiniHeartNearButton();

  enlargeYesButton();
}

function enlargeYesButton() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  let newWidth = 95 + clickCount * 28;
  let newHeight = 48 + clickCount * 12;
  let newFontSize = 18 + clickCount * 1.5;

  if (screenWidth <= 768) {
    newWidth = 80 + clickCount * 22;
    newHeight = 42 + clickCount * 10;
    newFontSize = 16 + clickCount * 1.2;
  }

  yesBtn.style.width = newWidth + "px";
  yesBtn.style.height = newHeight + "px";
  yesBtn.style.fontSize = newFontSize + "px";
  yesBtn.style.borderRadius = "25px";

  if (clickCount >= 13) {

    noBtn.style.display = "none";
    questionText.innerText = "";

    document.body.style.background = "#ff4f93";

    yesBtn.classList.add("fullscreen");

    yesBtn.style.position = "fixed";
    yesBtn.style.top = "0";
    yesBtn.style.left = "0";

    yesBtn.style.width = "100vw";
    yesBtn.style.height = "100vh";

    yesBtn.style.borderRadius = "0";
    yesBtn.style.margin = "0";
    yesBtn.style.padding = "0";

    yesBtn.style.fontSize =
      window.innerWidth <= 768 ? "46px" : "76px";

    yesBtn.style.zIndex = "999";
    yesBtn.innerHTML = "YES ❤️";
  }

  if (clickCount >= 16) {
    yesBtn.style.left = "0";
    yesBtn.style.top = "0";
    yesBtn.style.transform = "none";
    yesBtn.style.width = "100vw";
    yesBtn.style.height = "100vh";
    yesBtn.style.borderRadius = "0";
  }
}

function showResult() {
  document.body.style.background =
    "linear-gradient(135deg, #ff9acb, #ff5fa2, #ff2f8d)";

  document.getElementById("question").style.display = "none";
  document.getElementById("result").style.display = "block";

  for (let i = 0; i < 45; i++) {
    createPopHeart();
  }

  for (let i = 0; i < 60; i++) {
    setTimeout(createConfetti, i * 35);
  }

  if (!fallingHeartInterval) {
    fallingHeartInterval = setInterval(createHeart, 350);
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 16 + 14 + "px";

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
  }, 1600);
}

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");

  const symbols = ["❤️", "💖", "💕", "💗", "✨", "🌸"];
  confetti.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.fontSize = Math.random() * 18 + 14 + "px";

  document.body.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 3000);
}

function createMiniHeartNearButton() {
  const heart = document.createElement("div");
  heart.classList.add("pop-heart");
  heart.innerHTML = "💗";

  const rect = noBtn.getBoundingClientRect();
  heart.style.left = rect.left + rect.width / 2 + "px";
  heart.style.top = rect.top + "px";
  heart.style.fontSize = "20px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1200);
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton, { passive: false });
yesBtn.addEventListener("click", showResult);