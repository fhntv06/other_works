const burger = document.querySelector('[data-burger]');
const items = document.querySelectorAll('[data-menu-hover]');
let currentMenu = null;

const toggle = (e) => {
    e.currentTarget.classList.toggle('opened');
}

const onToggleMenu = (e) => {
    // currentMenu = e.currentTarget.querySelector('.submenu');
    // if (e.target !== currentMenu) {
        toggle(e);
    // }
}

burger.addEventListener('click', onToggleMenu);

items.forEach((item) => {
    item.addEventListener('mouseenter', toggle);
    item.addEventListener('mouseleave', toggle);
});

document.addEventListener('click', (el)=> {
    if (el.target.closest('.opened') !== currentMenu.parentElement) {
         currentMenu.parentElement.classList.remove('opened');
    }
})