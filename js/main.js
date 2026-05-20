/* ============================================================
   YOUR NUDGE — Main JavaScript
   ============================================================ */

// ---------- Nav: scroll state + burger ----------
const nav = document.getElementById('nav');
const navBurger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

navBurger.addEventListener('click', () => {
  navBurger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navBurger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ---------- Smooth scroll for anchor links ----------
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 72;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});

// ---------- Scroll Reveal ----------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---------- Stat number counters ----------
function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  if (isNaN(target)) return;
  const duration = 1400;
  const start = performance.now();
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// ---------- FAQ Accordion ----------
document.querySelectorAll('.fq__q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.fq');
    const isOpen = item.classList.contains('open');
    // Close all others
    document.querySelectorAll('.fq.open').forEach(open => open.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// (phone mockup is now a real screenshot — no JS animation needed)

// ---------- Active nav link on scroll ----------
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === '#' + entry.target.id
        );
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });

sections.forEach(s => sectionObserver.observe(s));
