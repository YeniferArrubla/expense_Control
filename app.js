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

/* Balance view */

/* Get Elements */
const $filCont = $('#filterContainer');
const $newOpCont = $('#newOperationC');
const $noOpImg = $('#noOperationContainer');
const $opTable =  $('#operationsTable');
const $tableBodyOp = $('#tBodyOperations');
const $editOp = $('#editOperation');


/* btn */
const $btnHideFil = $('#btnHideFilters');
const $btnNewOp = $('#newOperation');
const $btnCloseModalNewOp = $('#closeModalNewOp');
const $btnAddOp = $('#addOperation');
const $btnCancelAddOp = $('#addOperation');
const $btnConfEditOp = $('#confirmEditOperation');
const $btnCancelEditOp = $('#cancelEditOperation');

/* Functions */

const hideFilters = () =>{
    $filCont.classList.toggle('is-hidden')
    if($filCont.classList.contains('is-hidden')){
        $btnHideFil.innerText = 'Open Filters'
    }else{
        $btnHideFil.innerText = 'Hide Filters'
    }
}

const openNewOp = () => {
   $newOpCont.classList.add('is-active')
}

const closeModalNop = () => {
    $newOpCont.classList.remove('is-active')
}
/* Events */

$btnHideFil.addEventListener('click', hideFilters);
$btnNewOp.addEventListener('click', openNewOp);
$btnCloseModalNewOp.addEventListener('click', closeModalNop);

/* Categories Section */
let body = document.body;
/* Get Elements */
const $inpNewCategory = $('#inpNewCategory');
const $tBodyNewCategory = $('#tBodyNewCategory');
/* Btns */
const $btnAddCategory = $('#addCategory');
const $btnEditCategory = $$('.btnEditCategory');
const $btnDeleteCategory = $$('.btnDeleteCategory');

/* Array */

const categoryArr = [
    {
        id:1,
        category: 'Food'
    },
    {
        id:2,
        category: 'Essential services'
    },
    {
        id:3,
        category: 'Going out'
    },
    {
        id:4,
        category: 'Education'
    },
    {
        id:5,
        category: 'Transport'
    },
    {
        id:6,
        category: 'Job'
    }
];

const addCategory = (categoryArr) =>{
    for(let category of categoryArr) {
        $tBodyNewCategory.innerHTML += `
        <tr>
        <td class="is-size-6 mt-3">${category.category}</td>
        <td class="has-text-centered">
            <button id=${category.id} class="button is-success is-outlined icon is-small btnEditCategory">
            <i class="fa-solid fa-pencil"></i>
            </button>
        </td>
        <td class="has-text-centered">
            <button id=${category.id} class="button is-danger is-outlined icon is-small btnDeleteCategory">
            <i class="fas fa-times"></i>
            </button>
        </td>
        </tr>
        `
    }
}

addCategory(categoryArr);

/* Functions */


/* Events */


