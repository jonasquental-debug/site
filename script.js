// Fade-in on scroll
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.12 }
);

document.querySelectorAll('.grid-item, .about-inner, .contact h2, .contact p').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Nav background on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.backdropFilter = window.scrollY > 60 ? 'blur(12px)' : '';
  nav.style.background = window.scrollY > 60 ? 'rgba(245,244,240,0.85)' : '';
});
