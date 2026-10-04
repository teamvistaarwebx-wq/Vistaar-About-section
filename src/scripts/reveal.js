/**
 * Scroll reveal ([data-reveal]) and number count-up ([data-count]).
 * Uses IntersectionObserver only; animates opacity/transform via CSS classes.
 */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function revealAll(els) {
  els.forEach((el) => el.classList.add('is-visible'));
}

const revealEls = [...document.querySelectorAll('[data-reveal]')];

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealAll(revealEls);
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
  );
  revealEls.forEach((el) => io.observe(el));
}

/* Count-up. The server-rendered markup already holds the final value. */
const counters = [...document.querySelectorAll('[data-count]')];
const format = new Intl.NumberFormat('en-IN');

function runCounter(el) {
  const target = Number(el.dataset.count);
  const duration = 1400;
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = format.format(Math.round(target * eased));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

if (!reduceMotion && 'IntersectionObserver' in window && counters.length) {
  const cio = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        runCounter(entry.target);
        cio.unobserve(entry.target);
      });
    },
    { threshold: 0.6 },
  );
  counters.forEach((el) => {
    // Only reset counters that start off-screen, so nothing visibly flashes to 0.
    if (el.getBoundingClientRect().top > window.innerHeight) {
      el.textContent = '0';
      cio.observe(el);
    }
  });
}
