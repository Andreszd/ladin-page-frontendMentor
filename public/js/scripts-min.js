"use strict";

var mainNav = document.querySelector('#main-nav');
var topBar = document.querySelector('#top-bar');
var iconMenu = document.querySelector('#icon-menu');
iconMenu.addEventListener('click', function (evt) {
  if (mainNav.classList.contains('main-nav--show')) {
    iconMenu.src = '/assets/images/icon-hamburger.svg';
  } else {
    iconMenu.src = '/assets/images/icon-close.svg';
  }

  topBar.classList.toggle('top-bar--show');
  mainNav.classList.toggle('main-nav--show');
});