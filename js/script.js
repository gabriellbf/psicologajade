// Borda inferior ativa ao clicar 

function initBorder() {
    const headerLinks = document.querySelectorAll(".header-menu a");

    function activeBorder() {
        headerLinks.forEach((item) => {
            item.classList.remove("ativo");
        });
        this.classList.toggle("ativo");
    }

    headerLinks.forEach((link) => {
        link.addEventListener("click", activeBorder);
    });
}
initBorder();

// Scroll suave ao click

function initSmoothScroll() {
  const internalLinks = document.querySelectorAll(".js-menu a[href^='#']");
  const header = document.querySelector(".header-bg");

  function scrollToPlace(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const target = document.querySelector(href);

    const headerHeight = header.offsetHeight;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = targetPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  internalLinks.forEach((link) => {
    link.addEventListener("click", scrollToPlace);
  });
}

initSmoothScroll();

// FAQ

function initFaq() {
    const questions = document.querySelectorAll(".faq button");

    function activeQuestion(event) {
        const question = event.currentTarget;
        const controls = question.getAttribute('aria-controls');
        const answer = document.getElementById(controls);

        const ativa = answer.classList.contains("ativa")

        if (ativa) {
            answer.style.maxHeight = null;
            answer.classList.remove("ativa");
            question.setAttribute('aria-expanded', false);
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            answer.classList.add("ativa");
            question.setAttribute('aria-expanded', true);
        }
    }

    questions.forEach((question) => {
        question.addEventListener('click', activeQuestion);
    });
}
initFaq();

// Menu Hambúrguer

function initBuguerMenu() {
    const openMenu = document.querySelector('.mobile-menu');
    const menu = document.querySelector('.header-menu');

    openMenu.addEventListener('click', () => {
        menu.classList.toggle('ativo');
    });

    const itens = document.querySelectorAll('.header-menu a');

    itens.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('ativo');
    });
    });
}
initBuguerMenu();

// Animação

function initAnimaScroll() {
  const articles = document.querySelectorAll(".js-scroll");
  const halfWindow = window.innerHeight * 0.6;

  function animaScroll() {
      articles.forEach((article) => {
          const articleTop = article.getBoundingClientRect().top;
          const isArticleVisible = (articleTop - halfWindow) < 0
          if(isArticleVisible) {
              article.classList.add("ativo");
          }
      })
  }
  animaScroll();

  window.addEventListener("scroll", animaScroll);
}
initAnimaScroll();

//Plugin animação

if (window.SimpleAnime) {
    new SimpleAnime();
}












