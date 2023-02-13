//variáveis
const headerNav = document.querySelector("#header__nav");
const headerHamburgerNav = document.querySelector(".header__nav__hamburger")

//eventos
headerHamburgerNav.addEventListener("click", clicked());

//funções
function clicked() {
    headerNav.classList.toggle(".clicked");
}