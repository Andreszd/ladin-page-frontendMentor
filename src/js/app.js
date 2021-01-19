const mainNav = document.querySelector('#main-nav')
const topBar = document.querySelector('#top-bar')
const iconMenu = document.querySelector('#icon-menu')

const tabs = document.querySelector('#tabs')
const tabsItem = [...document.querySelectorAll('.tabs__item')]
const tabsContent = [...document.querySelectorAll('.tabs__content')]

const accordion = document.querySelector('#accordion')
const accordionItems = [...document.querySelectorAll('.accordion__item')]

/* FUNCTIONS */

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
function isChildOfHeader(node){
    return node.parentNode.classList.contains('accordion__header')
}
function isElementImage(element){
    return element != null && element.classList.contains('accordion__image')
}
function isBrotherOfElementImage(node){
    return node.nextSibling != undefined && isElementImage(node.nextSibling)
}
function findElementImage(listNodes){
    const elementImg = Array.from(listNodes).filter(node => isBrotherOfElementImage(node))
    
    return elementImg[0].nextSibling
}
function addClassActivetoImgElement(node){
    let parentNode = null
    if(isChildOfHeader(node)){
        parentNode = node.parentNode
    }else{
        parentNode = node
    }
    const elementImg = findElementImage(parentNode.childNodes)
    if(elementImg === null) return 
    elementImg.classList.toggle('accordion__image--active')
}
function addClassActivetoItemElement(node){
    let item = null
    if (isChildOfHeader(node)){
        item = node.parentNode.parentNode
    }else{
        item = node.parentNode
    }
    item.classList.toggle('accordion__item--active')
}

/* EVENTS */
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

accordion.addEventListener('click', evt =>{
    const targetClass = evt.target.classList
    if(targetClass.contains('accordion__title') || 
        targetClass.contains('accordion__header') ||
        targetClass.contains('accordion__image')){
        addClassActivetoItemElement(evt.target)
        addClassActivetoImgElement(evt.target)
    }
})