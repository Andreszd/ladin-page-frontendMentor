"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var mainNav = document.querySelector('#main-nav');
var topBar = document.querySelector('#top-bar');
var iconMenu = document.querySelector('#icon-menu');
var tabs = document.querySelector('#tabs');

var tabsItem = _toConsumableArray(document.querySelectorAll('.tabs__item'));

var tabsContent = _toConsumableArray(document.querySelectorAll('.tabs__content'));

var accordion = document.querySelector('#accordion');

var accordionItems = _toConsumableArray(document.querySelectorAll('.accordion__item'));
/* FUNCTIONS */


function addClassActive(element, idx) {
  if (element.nodeName === 'LI') element.classList.add('tabs__item--active');
  tabsContent[idx].classList.add('tabs__content--active');
}

function removeClassItems(items) {
  items.forEach(function (item, idx) {
    if (item.nodeName === 'LI' && item.classList.contains('tabs__item--active') && tabsContent[idx].classList.contains('tabs__content--active')) {
      item.classList.remove('tabs__item--active');
      tabsContent[idx].classList.remove('tabs__content--active');
    }
  });
}

function isChildOfHeader(node) {
  return node.parentNode.classList.contains('accordion__header');
}

function isElementImage(element) {
  return element != null && element.classList.contains('accordion__image');
}

function isBrotherOfElementImage(node) {
  return node.nextSibling != undefined && isElementImage(node.nextSibling);
}

function findElementImage(listNodes) {
  var elementImg = Array.from(listNodes).filter(function (node) {
    return isBrotherOfElementImage(node);
  });
  return elementImg[0].nextSibling;
}

function addClassActivetoImgElement(node) {
  var parentNode = null;

  if (isChildOfHeader(node)) {
    parentNode = node.parentNode;
  } else {
    parentNode = node;
  }

  var elementImg = findElementImage(parentNode.childNodes);
  if (elementImg === null) return;
  elementImg.classList.toggle('accordion__image--active');
}

function addClassActivetoItemElement(node) {
  var item = null;

  if (isChildOfHeader(node)) {
    item = node.parentNode.parentNode;
  } else {
    item = node.parentNode;
  }

  item.classList.toggle('accordion__item--active');
}
/* EVENTS */


iconMenu.addEventListener('click', function (evt) {
  if (mainNav.classList.contains('main-nav--show')) {
    iconMenu.src = '/assets/images/icon-hamburger.svg';
  } else {
    iconMenu.src = '/assets/images/icon-close.svg';
  }

  topBar.classList.toggle('top-bar--show');
  mainNav.classList.toggle('main-nav--show');
});
tabs.addEventListener('click', function (evt) {
  var idx = tabsItem.indexOf(evt.target);
  removeClassItems(tabsItem);
  addClassActive(evt.target, idx);
});
accordion.addEventListener('click', function (evt) {
  var targetClass = evt.target.classList;

  if (targetClass.contains('accordion__title') || targetClass.contains('accordion__header') || targetClass.contains('accordion__image')) {
    addClassActivetoItemElement(evt.target);
    addClassActivetoImgElement(evt.target);
  }
});