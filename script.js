document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('[data-mobile-menu-toggle]');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!toggleButton || !mobileMenu) return;

  toggleButton.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden', isOpen);
    toggleButton.setAttribute('aria-expanded', String(!isOpen));
  });
});
