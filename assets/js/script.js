  const dial = document.getElementById('dialCard');
  const dialIo = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { dial.classList.add('in-view'); dialIo.disconnect(); } });
  }, { threshold: 0.4 });
  dialIo.observe(dial);

  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  function closeMenu(){
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
  }
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mobileMenu.classList.toggle('open', !isOpen);
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

  // Scroll-spy active nav link
  const navLinks = document.querySelectorAll('a[data-nav]');
  const sections = ['services','process','plans','faq'].map(id => document.getElementById(id)).filter(Boolean);
  const spyIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });
  sections.forEach(s => spyIo.observe(s));
