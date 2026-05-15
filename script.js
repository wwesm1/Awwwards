const inputWrap = document.querySelector('.input-container');
const searchInput = inputWrap.querySelector('input');
const modal = document.getElementById('searchModal');
const overlay = document.getElementById('searchOverlay');
const navItems = document.querySelector('.nav__items'); // add this

function open() {
    inputWrap.classList.add('is-open');
    modal.classList.add('is-open');
    overlay.classList.add('is-active');
    navItems.classList.add('is-hidden');  // add this
    searchInput.focus();
}

function close() {
    inputWrap.classList.remove('is-open');
    modal.classList.remove('is-open');
    overlay.classList.remove('is-active');
    navItems.classList.remove('is-hidden'); // add this
    searchInput.blur();
}

inputWrap.addEventListener('click', (e) => { e.stopPropagation(); open(); });
overlay.addEventListener('click', close);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });