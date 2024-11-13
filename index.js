
// =================== SHOW MENU =======================
const navMenu = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navClose = document.querySelector('.nav-close');

// ======= MENU SHOW ========
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}


// =====MENU HIDDEN =======
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}