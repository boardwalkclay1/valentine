// FLOATING HEARTS
function createHeart() {
  const h = document.createElement("div");
  h.classList.add("heart");
  h.innerText = "❤️";
  h.style.left = Math.random() * window.innerWidth + "px";
  h.style.top = window.innerHeight + "px";
  h.style.fontSize = (Math.random() * 25 + 20) + "px";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 3000);
}
setInterval(createHeart, 400);


// BUTTON LOGIC
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let dodgeCount = 0;
const maxDodges = Math.floor(Math.random() * 3) + 3; // 3–5 attempts


// Move No button to a random safe position
function moveNoBtn() {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth - 20;
  const maxY = window.innerHeight - btnHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}


// Initial placement
moveNoBtn();


// Dodge behavior
noBtn.addEventListener("mouseover", () => {
  dodgeCount++;

  // After enough attempts → No button jumps on top of Yes
  if (dodgeCount >= maxDodges) {
    const yesRect = yesBtn.getBoundingClientRect();

    noBtn.style.left = yesRect.left + "px";
    noBtn.style.top = yesRect.top + "px";

    // Teleport away right before click
    noBtn.addEventListener("mousedown", () => {
      moveNoBtn();
    }, { once: true });

    return;
  }

  // Normal dodge
  moveNoBtn();
});
