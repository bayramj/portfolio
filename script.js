const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const header = document.querySelector('[data-header]');
const year = document.querySelector('[data-year]');

year.textContent = new Date().getFullYear();

navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

window.addEventListener('scroll', () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
}, { passive: true });
