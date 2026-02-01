// Floating hearts generator
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 2000);
}
setInterval(createHeart, 400);

// No button dodges the cursor
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// Yes button triggers heart burst
document.getElementById("yesBtn").addEventListener("click", () => {
  const burst = document.getElementById("heartBurst");
  for (let i = 0; i < 40; i++) {
    const h = document.createElement("div");
    h.classList.add("heart");
    h.innerText = "💖";
    h.style.left = window.innerWidth / 2 + "px";
    h.style.top = window.innerHeight / 2 + "px";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 2000);
  }

  alert("Yay! You’re my Valentine now! 💘");
});
