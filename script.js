// ================================
// TEXTO DIGITANDO
// ================================

const titulo = document.getElementById("titulo");

const texto = "Feliz aniversário, Milena";

let i = 0;

function escrever() {

    if (i < texto.length) {

        titulo.innerHTML += texto.charAt(i);

        i++;

        setTimeout(escrever, 120);

    }

}

escrever();


// ================================
// SCROLL REVEAL
// ================================

const elementos = document.querySelectorAll(".hidden");

const observador = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

elementos.forEach((el) => observador.observe(el));


// ================================
// PLAYER DE MÚSICA
// ================================

const audio = document.getElementById("audio");
const play = document.getElementById("play");
const capa = document.getElementById("capa");

play.addEventListener("click", () => {

    if (audio.paused) {

        audio.play();

        play.innerHTML = "⏸";

        capa.classList.add("tocando");

    } else {

        audio.pause();

        play.innerHTML = "▶";

        capa.classList.remove("tocando");

    }

});


// ================================
// CARROSSEL INFINITO
// ================================

const carrossel = document.querySelector(".carrossel");

// Duplica as fotos
carrossel.innerHTML += carrossel.innerHTML;

// Começa do início
carrossel.scrollLeft = 0;

function moverCarrossel() {

    carrossel.scrollLeft += 1;

    if (carrossel.scrollLeft >= carrossel.scrollWidth / 2) {

        carrossel.scrollLeft = 0;

    }

    requestAnimationFrame(moverCarrossel);

}

moverCarrossel();


// ================================
// PARALLAX DO HERO
// ================================

window.addEventListener("scroll", () => {

    const hero = document.getElementById("hero");

    hero.style.backgroundPositionY = window.scrollY * 0.5 + "px";

});