const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); 
    navMenu.classList.toggle('active'); 
});

document.addEventListener('click', () => {
    navMenu.classList.remove('active'); 
});


