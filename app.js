/* Useful functions */
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

/* Get Elements */

const $inpNewCategory = $('#inpNewCategory');
const $tBodyNewCategory = $('#tBodyNewCategory');
const $modalEditCategory = $('#modalEditCategory');
const $inpChangeCatName = $('#inpChangeCatName')

/* Btns */

const $btnAddCategory = $('#addCategory');
const $btnCancelEditCategory = $('#btnCancelEditCategory')

/* Local Storage Functions */

const parsedCategories = JSON.parse(localStorage.getItem('categories'));

/* Array */

let categories = parsedCategories || [
    {
        categoryName: 'Food'
    },

    {
        categoryName: 'Essential services'
    },

    {
        categoryName: 'Going out'
    },

    {
        categoryName: 'Education'
    },

    {
        categoryName: 'Transport'
    },

    {
        categoryName: 'Job'
    }
];

/* Functions */

const showCategories = () =>{
    $tBodyNewCategory.innerHTML = '';
    for(let category of categories) {
        $tBodyNewCategory.innerHTML += `
        <tr>
        <td class="is-size-6 mt-3">${category.categoryName}</td>
        <td class="has-text-centered">
            <button id=${category.categoryName} class="button btnEdit is-success is-outlined icon is-small">
            ✓
            </button>
        </td>
        <td class="has-text-centered">
            <button id=${category.categoryName} class="button btnDelete is-danger is-outlined icon is-small btnDeleteCategory">
            ✕
            </button>
        </td>
        </tr>
        `
    }
}
showCategories(categories)

const addNewCat = () => {
    let newObjArr = {categoryName: ''}
    newObjArr.categoryName = $inpNewCategory.value
    categories.push(newObjArr)
    localStorage.setItem('categories', JSON.stringify(categories));
    showCategories()
}

console.log(categories)

const $$buttonEdit = $$('.btnEdit')

const editCatName = () => {
for(const button of $$buttonEdit) {
    button.addEventListener('click', (e) => {
        $modalEditCategory.classList.remove('is-hidden')   
        $inpChangeCatName.value = `${e.target.id}`
    })
}
}
editCatName()

const $$buttonDelete = $$('.btnDelete')
for(const button of $$buttonDelete) {
    button.addEventListener('click', (e) =>
    console.log('cat', e.target.id))
}

const deleteCategory = () => {
    $inpChangeCatName.value 
}

const closeModalEditCatName = () =>{
    $modalEditCategory.classList.add('is-hidden')
}


/* Events */

$btnAddCategory.addEventListener('click', addNewCat);
$btnCancelEditCategory.addEventListener('click', closeModalEditCatName)