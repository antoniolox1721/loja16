const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.sidebar-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isExpanded));
    nav.classList.toggle('is-open');
  });
}
