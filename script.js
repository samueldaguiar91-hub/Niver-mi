const container = document.querySelector(".confetti-container");

const colors = ["red", "yellow", "blue", "green", "pink"];

let ativo = false;

// 🎉 cria confete
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

// 🎊 confete contínuo
setInterval(() => createConfetti(2), 200);

// 💥 explosão no botão
function explodir() {
  createConfetti(120);

  const musica = document.getElementById("musica");
  musica.currentTime = 0;
  musica.play();
}

// 🔒 login
function entrar() {
  const senha = "1234";
  const input = document.getElementById("senha").value;

  if (input === senha) {
    const login = document.getElementById("login");
    const conteudo = document.getElementById("conteudo");

    // remove login
    login.style.display = "none";

    // mostra conteúdo corretamente (sem quebrar layout)
    conteudo.classList.add("ativo");

    // ativa confete
    ativo = true;

    // toca música