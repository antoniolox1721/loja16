const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('is-open');
  });
}

const forms = document.querySelectorAll('.contact-form');
forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Mensagem enviada (placeholder). Ligue depois ao seu backend/form service.');
  });
});
