document.addEventListener('DOMContentLoaded', () => {
  const iconMenuOpen = document.getElementById('img-menu-open');
  const iconMenuClose = document.getElementById('img-menu-close');
  const nav = document.querySelector('nav');
  const bgOverlay = document.getElementById('bg-overlay');

  iconMenuOpen.addEventListener('click', () => {
    iconMenuOpen.classList.add('hide');
    iconMenuClose.classList.remove('hide');
    nav.classList.remove('hide');
    bgOverlay.classList.remove('hide');
  });

  iconMenuClose.addEventListener('click', () => {
    iconMenuOpen.classList.remove('hide');
    iconMenuClose.classList.add('hide');
    nav.classList.add('hide');
    bgOverlay.classList.add('hide');
  });

  if (innerWidth >= 767) {
    iconMenuOpen.classList.add('hide');
    iconMenuClose.classList.add('hide');
    nav.classList.remove('hide');
    bgOverlay.classList.add('hide');
  } else {
    iconMenuOpen.classList.remove('hide');
    iconMenuClose.classList.add('hide');
    nav.classList.add('hide');
    bgOverlay.classList.add('hide');
  }

  window.addEventListener('resize', () => {
    if (innerWidth >= 767) {
      iconMenuOpen.classList.add('hide');
      iconMenuClose.classList.add('hide');
      nav.classList.remove('hide');
      bgOverlay.classList.add('hide');
    } else {
      iconMenuOpen.classList.remove('hide');
      iconMenuClose.classList.add('hide');
      nav.classList.add('hide');
      bgOverlay.classList.add('hide');
    }
  })
});