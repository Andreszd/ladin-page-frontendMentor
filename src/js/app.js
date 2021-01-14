const mainNav = document.querySelector('#main-nav')
const topBar = document.querySelector('#top-bar')
const iconMenu = document.querySelector('#icon-menu')

iconMenu.addEventListener('click', evt =>{
    if(mainNav.classList.contains('main-nav--show')){
        iconMenu.src = '/assets/images/icon-hamburger.svg'      
    }else{
        iconMenu.src = '/assets/images/icon-close.svg'      
    }
    topBar.classList.toggle('top-bar--show')
    mainNav.classList.toggle('main-nav--show')
})
