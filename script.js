const container = document.querySelector(".confetti-container");

const colors = ["red", "yellow", "blue", "green", "pink"];

let ativo = false; // controla se pode rodar

function createConfetti(qtd = 1) {
  if (!ativo) return;

  for (let i = 0; i < qtd; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    const size = Math.random() * 6 + 4;
    confetti.style.width = size + "px";
    confetti.style.height = size + "px";

    const duration = Math.random() * 3 + 2;
    confetti.style.animationDuration = duration + "s";

    container.appendChild(confetti);

    setTimeout(() => confetti.remove(), duration * 1000);
  }
}

// confete contínuo (só depois de entrar)
setInterval(() => createConfetti(2), 200);

// explosão ao clicar
function explodir() {
  createConfetti(120);

  // 🔥 som opcional no clique
  const musica = document.getElementById("musica");
  musica.currentTime = 0;
  musica.play();
}