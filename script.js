document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('[data-mobile-menu-toggle]');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (toggleButton && mobileMenu) {
    toggleButton.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden', isOpen);
      toggleButton.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  const isHomePage = document.body.classList.contains('home-page');
  const siteHeader = document.querySelector('.site-header');

  if (!isHomePage || !siteHeader) return;

  const updateHeaderState = () => {
    const hasScrolled = window.scrollY > 24;
    siteHeader.classList.toggle('is-scrolled', hasScrolled);
  };

  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });
});
