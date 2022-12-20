const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/* Balance View */

/* Get elements */

const $navbarBurger = $('#navBurger');
const $navMenu = $('#navMenu')


/* Functions */
const menuHamburger = () => {
    $navbarBurger.classList.toggle('is-active')
    $navMenu.classList.toggle('is-active')
}

/* Events */
$navbarBurger.addEventListener('click', menuHamburger);


