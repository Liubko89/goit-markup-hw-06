const mobileBackdrop = document.querySelector('.mob-backdrop');
const backdrop = document.querySelector('.backdrop');
const mobMenuBtn = document.querySelector('.mob-menu-btn');
const mobCloseBtn = document.querySelector('.mob-close-btn');
const heroButton = document.querySelector('.hero-button');
const modalCloseButton = document.querySelector('.modal-close-button');
const mobNavMenu = document.querySelector('.mob-nav-menu');

mobMenuBtn.addEventListener('click', handleMobMenu);
heroButton.addEventListener('click', handleOpenBackdrop);

function handleMobMenu() {
  mobileBackdrop.classList.add('is-open');
  mobCloseBtn.addEventListener('click', handleCloseBackdrop);
  window.addEventListener('keydown', handleMobileBackdropEscape);
  mobNavMenu.addEventListener('click', handleLink);
}

function handleOpenBackdrop() {
  backdrop.classList.add('is-open');
  modalCloseButton.addEventListener('click', handleCloseDeskBackdrop);
  window.addEventListener('keydown', handleEscape);
  backdrop.addEventListener('click', handleClickOnBackdrop);
}

function handleCloseBackdrop() {
  mobileBackdrop.classList.remove('is-open');
  mobCloseBtn.removeEventListener('click', handleCloseBackdrop);
  window.removeEventListener('keydown', handleMobileBackdropEscape);
  mobNavMenu.removeEventListener('click', handleLink);
}

function handleCloseDeskBackdrop() {
  backdrop.classList.remove('is-open');
  modalCloseButton.removeEventListener('click', handleCloseDeskBackdrop);
  backdrop.removeEventListener('click', handleClickOnBackdrop);
  window.removeEventListener('keydown', handleEscape);
}

function handleEscape(ev) {
  ev.code === 'Escape' ? handleCloseDeskBackdrop() : null;
}

function handleMobileBackdropEscape(ev) {
  ev.code === 'Escape' ? handleCloseBackdrop() : null;
}

function handleClickOnBackdrop(ev) {
  ev.target.classList[0] === 'backdrop' ? handleCloseDeskBackdrop() : null;
}

function handleLink(ev) {
  ev.target.textContent === 'Portfolio' || 'Studio' || 'Contacts'
    ? handleCloseBackdrop()
    : null;
}
