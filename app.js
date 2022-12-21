const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/* Header Features */

/* Get elements */

const $navbarBurger = $('#navBurger');
const $navMenu = $('#navMenu');
const $balanceSec = $('#balance');
const $categorySec = $('#categoriesSection');
const $reportSec = $('#reportSection')

/* Btns */
const $btnBalance = $('#balanceLink');
const $btnCategories = $('#categoriesLink');
const $btnReports = $('#reportsLink');


/* Functions */
const menuHamburger = () => {
    $navbarBurger.classList.toggle('is-active')
    $navMenu.classList.toggle('is-active')
}

const openBalanceSec = () => {
    $balanceSec.classList.remove('is-hidden')
    $categorySec.classList.add('is-hidden')
    $reportSec.classList.add('is-hidden')
}

const openCategorySec = () => {
    $categorySec.classList.remove('is-hidden')
    $balanceSec.classList.add('is-hidden')
    $reportSec.classList.add('is-hidden')
}

const openReportSec = () => {
    $reportSec.classList.remove('is-hidden')
    $balanceSec.classList.add('is-hidden')
    $categorySec.classList.add('is-hidden')
}

/* Events */
$navbarBurger.addEventListener('click', menuHamburger);

$btnCategories.addEventListener('click', openCategorySec);

$btnReports.addEventListener('click', openReportSec);

$btnBalance.addEventListener('click', openBalanceSec);
