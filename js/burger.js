const burger = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-menu');
const closeBtn = document.querySelector('#close-btn');
let menuOpen = false;

// Открытие и закрытие бургер-меню
burger.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
  navMenu.classList.toggle('flex');
  closeBtn.classList.toggle('hidden');
  burger.classList.add('hidden'); // Скрыть бургер-меню
  const [line1, line2, line3] = burger.children;
  if (!menuOpen) {
    line1.classList.add('transform', 'rotate-45', 'translate-y-2');
    line2.classList.add('opacity-0');
    line3.classList.add('transform', '-rotate-45', '-translate-y-2');
  } else {
    line1.classList.remove('transform', 'rotate-45', 'translate-y-2');
    line2.classList.remove('opacity-0');
    line3.classList.remove('transform', '-rotate-45', '-translate-y-2');
  }
  menuOpen = !menuOpen;
});

// Закрытие меню по кнопке X
closeBtn.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
  navMenu.classList.toggle('flex');
  closeBtn.classList.toggle('hidden');
  burger.classList.remove('hidden'); // Показать бургер-меню снова

  const [line1, line2, line3] = burger.children;
  line1.classList.remove('transform', 'rotate-45', 'translate-y-2');
  line2.classList.remove('opacity-0');
  line3.classList.remove('transform', '-rotate-45', '-translate-y-2');

  menuOpen = false;
});

// Закрытие меню при клике на ссылку
const menuLinks = document.querySelectorAll('[data-close]');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.add('hidden');
    navMenu.classList.remove('flex');
    closeBtn.classList.add('hidden');
    burger.classList.remove('hidden'); // Показать бургер снова

    const [line1, line2, line3] = burger.children;
    line1.classList.remove('transform', 'rotate-45', 'translate-y-2');
    line2.classList.remove('opacity-0');
    line3.classList.remove('transform', '-rotate-45', '-translate-y-2');
    menuOpen = false;
  });
});