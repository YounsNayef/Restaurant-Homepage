import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

function init() {
    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const contactBtn = document.getElementById('contact-btn');

    homeBtn.addEventListener('click', () => {
        clearContent();
        loadHome();
    });

    menuBtn.addEventListener('click', () => {
        clearContent();
        loadMenu();
    });

    contactBtn.addEventListener('click', () => {
        clearContent();
        loadContact();
    });

    // Load home tab by default
    loadHome();
}

document.addEventListener('DOMContentLoaded', init);
