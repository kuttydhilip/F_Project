// ***** This line of code for Navigation bar to make responsive ******************************************************************************************************
const menu = document.querySelector('#menu');
const menuList = document.querySelector('nav ul');
const logo = document.querySelector('.logo');
const topNav = document.querySelector('.animeTop')
menu.addEventListener('click', () => {
    menuList.classList.toggle('showmenu');
    logo.classList.toggle('showlogo');
    topNav.classList.toggle('animeTop');
    topNav.classList.toggle('animeLeft');
    

});
window.addEventListener('resize', () => {
    menuList.classList.remove('showmenu');
    logo.classList.remove('showlogo');
    topNav.classList.add('animeTop');
    topNav.classList.remove('animeLeft');

});
// ************************************************************************************************************
window.addEventListener('scroll',() =>{
    menuList.classList.remove('showmenu');
    logo.classList.remove('showlogo');
});