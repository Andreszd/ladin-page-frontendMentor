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