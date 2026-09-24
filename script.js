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

elementos.forEach((el) => {

    observador.observe(el);

});


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


// Guarda as fotos originais
const fotosOriginais = Array.from(carrossel.children);


// Duplica as fotos
fotosOriginais.forEach((foto) => {

    carrossel.appendChild(
        foto.cloneNode(true)
    );

});


let velocidade = 0.6;

let arrastando = false;

let inicioX = 0;

let scrollInicial = 0;


// ================================
// MOVIMENTO AUTOMÁTICO
// ================================

function moverCarrossel() {

    if (!arrastando) {

        carrossel.scrollLeft += velocidade;

    }


    const metade = carrossel.scrollWidth / 2;


    if (carrossel.scrollLeft >= metade) {

        carrossel.scrollLeft -= metade;

    }


    requestAnimationFrame(moverCarrossel);

}

moverCarrossel();


// ================================
// COMEÇOU A ARRASTAR
// ================================

carrossel.addEventListener("pointerdown", (e) => {

    arrastando = true;

    inicioX = e.clientX;

    scrollInicial = carrossel.scrollLeft;

    carrossel.setPointerCapture(e.pointerId);

});


// ================================
// ARRASTAR
// ================================

carrossel.addEventListener("pointermove", (e) => {

    if (!arrastando) return;


    const distancia = e.clientX - inicioX;


    carrossel.scrollLeft =
        scrollInicial - distancia;

});


// ================================
// SOLTOU
// ================================

carrossel.addEventListener("pointerup", (e) => {

    arrastando = false;

    carrossel.releasePointerCapture(e.pointerId);

});


carrossel.addEventListener("pointercancel", () => {

    arrastando = false;

});


// ================================
// PARALLAX DO HERO
// ================================

window.addEventListener("scroll", () => {

    const hero = document.getElementById("hero");

    hero.style.backgroundPositionY =
        window.scrollY * 0.5 + "px";

});