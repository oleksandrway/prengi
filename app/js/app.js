// // Import jQuery module (npm i jquery)
// import $ from 'jquery';
//  window.jQuery = $
//  window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

  // $('body').addClass('blbalblabl').style({
  //    color:
  //   });

  // Custom JS



  // menu 

  const hamburger = document.querySelector('.promo__hamburger'),
    menu = document.querySelector('.promo__list'),
    menuLink = document.querySelectorAll('.promo__link'),
    close = document.querySelector('.close'),
    overlay = document.querySelector('.overlay'),
    body = document.querySelector('body'),
    links = document.querySelectorAll('.promo__link');


  console.log(menuLink);

  function toggleMenu() {
    if (menu.classList.contains('menu_active')) {
      menu.classList.remove('menu_active');
      // hamburger.classList.remove('hamburger_active');
      // hamburger.style.display = "block";

    } else {
      menu.classList.add('menu_active');
      // hamburger.classList.add('hamburger_active');
      // hamburger.style.display = "none";


    }
    overlay.classList.toggle('overlay_active');
    body.classList.toggle('noScroll');
    hamburger.classList.toggle('hide');

  }





  close.addEventListener('click', () => {
    // menu.classList.toggle('menu_active');
    toggleMenu();
  });

  hamburger.addEventListener('click', () => {
    // menu.classList.toggle('menu_active');
    toggleMenu();
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
    toggleMenu();

    } );
  });

  document.addEventListener('keydown', e => {
    if (e.code === "Escape" && menu.classList.contains('menu_active')) {
      toggleMenu();
    }
  });

  overlay.addEventListener('click', (e) => {
    if (e.target ===overlay) {
      toggleMenu();

    }
  });


});