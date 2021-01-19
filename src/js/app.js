const mainNav = document.querySelector('#main-nav')
const topBar = document.querySelector('#top-bar')
const iconMenu = document.querySelector('#icon-menu')

const tabs = document.querySelector('#tabs')
const tabsItem = [...document.querySelectorAll('.tabs__item')]
const tabsContent = [...document.querySelectorAll('.tabs__content')]

iconMenu.addEventListener('click', evt =>{
    if(mainNav.classList.contains('main-nav--show')){
        iconMenu.src = '/assets/images/icon-hamburger.svg'      
    }else{
        iconMenu.src = '/assets/images/icon-close.svg'      
    }
    topBar.classList.toggle('top-bar--show')
    mainNav.classList.toggle('main-nav--show')
})

tabs.addEventListener('click', evt =>{
    const idx = tabsItem.indexOf(evt.target)
    removeClassItems(tabsItem)
    addClassActive(evt.target, idx)
})
function addClassActive(element, idx){
    if(element.nodeName === 'LI') element.classList.add('tabs__item--active')
    tabsContent[idx].classList.add('tabs__content--active')
}
function removeClassItems(items){
    items.forEach((item, idx)=> {
        if(item.nodeName === 'LI' && item.classList.contains('tabs__item--active') 
            && tabsContent[idx].classList.contains('tabs__content--active')){
            item.classList.remove('tabs__item--active')
            tabsContent[idx].classList.remove('tabs__content--active')
        }
    });
}