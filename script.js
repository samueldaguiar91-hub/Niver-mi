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

// 💥 explosão (SEM reiniciar música)
function explodir() {
  createConfetti(150);

  const musica = document.getElementById("musica");

  // só toca se estiver pausada
  if (musica.paused) {
    musica.play();
  }
}

// 🔒 login
function entrar() {
  const senha = "Dantas@1";
  const input = document.getElementById("senha").value;

  if (input === senha) {
    const login = document.getElementById("login");
    const conteudo = document.getElementById("conteudo");

    // fade do login
    login.style.opacity = "0";

    setTimeout(() => {
      login.style.display = "none";

      // mostra conteúdo corretamente
      conteudo.classList.add("ativo");
      conteudo.style.opacity = "1";

      // ativa confete
      ativo = true;

      // toca música
      document.getElementById("musica").play();

    }, 500);

  } else {
    document.getElementById("erro").innerText = "Senha errada 😈";
  }
}
