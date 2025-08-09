// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('navMenu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Smooth scroll for in-page links
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const id = link.getAttribute('href');
  const target = document.querySelector(id);
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    menu?.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
  }
});

// Intersection-based reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section, .feature, .steps li, .gallery img').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
