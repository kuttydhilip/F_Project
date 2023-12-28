// ***** This line of code for Navigation bar to make responsive ******************************************************************************************************
const menu = document.querySelector('#menu');
const menuList = document.querySelector('nav ul');
const logo = document.querySelector('.logo');
menu.addEventListener('click', () => {
    menuList.classList.toggle('showmenu');
    logo.classList.toggle('showlogo');
});
window.addEventListener('resize', () => {
    menuList.classList.remove('showmenu');
    logo.classList.remove('showlogo');
});
// ************************************************************************************************************