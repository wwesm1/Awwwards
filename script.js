const inputWrap = document.querySelector('.input-container');
const searchInput = inputWrap.querySelector('input');
const modal = document.getElementById('searchModal');
const overlay = document.getElementById('searchOverlay');
const navItems = document.querySelector('.nav__items');
const nav = document.querySelector('nav');

function open() {
    inputWrap.classList.add('is-open');
    modal.classList.add('is-open');
    overlay.classList.add('is-active');
    navItems.classList.add('is-hidden');  // add this
    searchInput.focus();
}

function close() {
    inputWrap.classList.remove('is-open');

    nav.classList.add('is-search-open'); // add
    modal.classList.remove('is-open');
    overlay.classList.remove('is-active');
    navItems.classList.remove('is-hidden'); // add this
    searchInput.blur();
}

inputWrap.addEventListener('click', (e) => { e.stopPropagation(); open(); });
overlay.addEventListener('click', close);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

function close() {
    inputWrap.classList.remove('is-open');
    nav.classList.remove('is-search-open'); // add
    modal.classList.remove('is-open');
    overlay.classList.remove('is-active');

    // wait for input to shrink first, then fade nav items in
    setTimeout(() => {
        navItems.classList.remove('is-hidden');
    }, 200); // match your input width transition duration
}

const loginModal = document.getElementById('modal-login');
const signupModal = document.getElementById('modal-signup');

// Open
document.getElementById('log-in').addEventListener('click', () => {
    loginModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
});
document.getElementById('sign-up').addEventListener('click', () => {
    signupModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
});

// Close buttons
document.getElementById('close-login').addEventListener('click', () => closeModal(loginModal));
document.getElementById('close-signup').addEventListener('click', () => closeModal(signupModal));

// Switch between modals
document.getElementById('switch-to-signup').addEventListener('click', () => {
    closeModal(loginModal);
    signupModal.classList.add('is-open');
});
document.getElementById('switch-to-login').addEventListener('click', () => {
    closeModal(signupModal);
    loginModal.classList.add('is-open');
});

// Click backdrop to close
[loginModal, signupModal].forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal(overlay);
    });
});

// Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal(loginModal);
        closeModal(signupModal);
    }
});

function closeModal(overlay) {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
}