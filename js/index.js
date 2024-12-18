
// Seleciona os elementos
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Adiciona o evento de clique
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Adiciona ou remove a classe "active"
});
