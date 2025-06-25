//botões animados ao clicar

const links = document.querySelectorAll(".header-menu a");

function ativarLink (link) {
    link.addEventListener("click", function () {
        links.forEach((item) => item.classList.remove("ativo"));
        this.classList.add("ativo");
    })
}

links.forEach(ativarLink);

//FAQ

const perguntas = document.querySelectorAll(".faq button");

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    const ativa = resposta.classList.contains("ativa")

    if (ativa) {
        resposta.style.maxHeight = null;
        resposta.classList.remove("ativa");
        pergunta.setAttribute('aria-expanded', false);
    } else {
        resposta.style.maxHeight = resposta.scrollHeight + "px";
        resposta.classList.add("ativa");
        pergunta.setAttribute('aria-expanded', true);
    }
}

perguntas.forEach((pergunta) => {
    pergunta.addEventListener('click', ativarPergunta);
});

//Menu Hambúrguer

const menuAbrir = document.querySelector('.mobile-menu');
const menu = document.querySelector('.header-menu');

menuAbrir.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});

const itens = document.querySelectorAll('.header-menu a');

itens.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('ativo');
  });
});

//Animação
if (window.SimpleAnime) {
    new SimpleAnime();
}



