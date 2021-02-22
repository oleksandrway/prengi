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



  // ANIMATION


  const animItems = document.querySelectorAll('.anim');


  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll(params) {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 6;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint)) {
          animItem.classList.add('_active');
        }


        //  if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset< (animItemOffset +animItemHeight)){
        //   animItem.classList.add('_active');
        //  } 
        //  else {
        //    if(!animItem.classList.contains('anim-no-hide')){
        //   animItem.classList.remove('_active');
        //    }
        //  }

      }

      function offset(el) {
        const rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
          top: rect.top + scrollTop,
          left: rect.left + scrollLeft
        };
      }
    }

    setTimeout(() => {
      animOnScroll();
    }, 500);
  }




  // hide menu


  let lastScrollTop = 0;
  let delta = 10;
  let navbarHeight = $('header').outerHeight();
  let didScroll = false;


  // on scroll, let the interval function know the user has scrolled
  $(window).scroll(function (event) {
    didScroll = true;
  });
  // run hasScrolled() and reset didScroll status
  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    // do stuff here...
    let st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta) {
      return;
    } else {

      // If current position > last position AND scrolled past navbar...
      if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').addClass('nav-up');
      } else {
        // Scroll Up
        // If did not scroll past the document (possible on mac)...
        if (st + $(window).height() < $(document).height()) {
          $('header').removeClass('nav-up');
        }
      }

      lastScrollTop = st;

    }


  }











  // menu 

  const hamburger = document.querySelector('.promo__hamburger'),
    menu = document.querySelector('.promo__list'),
    menuLink = document.querySelectorAll('.promo__link'),
    close = document.querySelector('.close'),
    overlay = document.querySelector('.overlay'),
    body = document.querySelector('body'),
    html = document.querySelector('html'),
    links = document.querySelectorAll('.promo__link');




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
    html.classList.toggle('noScroll');

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

    });
  });

  document.addEventListener('keydown', e => {
    if (e.code === "Escape" && menu.classList.contains('menu_active')) {
      toggleMenu();
    }
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      toggleMenu();

    }
  });



  // promo slider

  $(document).ready(function () {
    $('.promo__slider').slick({
      // slidesToShow: 1,
      dots: true,
      speed: 1000,
      infinite: true,
      // arrows:false,

      fade: true,
      cssEase: 'linear',

      centerMode: true,
      centerPadding: 0,

      // autoplay: true,
      // autoplaySpeed: 5000,
      responsive: [{
        breakpoint: 768,
        settings: {
          autoplay: false,
        }
      }]
    });
  });







  // decisions slider



  $(document).ready(function () {
    $('.decisions__slider').slick({
      asNavFor:".decisions__slider_descr",
      slidesToShow: 1,
      dots: true,
      speed: 1000,
      infinite: true,
      centerMode: true,
      centerPadding: 0,
      // autoplay: true,
      autoplaySpeed: 3000,
      fade: true,



      responsive: [{
          breakpoint: 768,
          settings: {
            autoplay: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            autoplay: false,

          }
        }
      ]
    });
  });


  $(document).ready(function () {
    $('.decisions__slider_descr').slick({
      asNavFor:".decisions__slider",

      slidesToShow: 1,
      speed: 1000,
      arrows:false,
      infinite: true,
      centerMode: true,
      centerPadding: 0,
      fade: true,

      

    });
  });








  // // arrow  to up 


  $(window).scroll(function () {
    if ($(this).scrollTop() > 1300) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  $("a[href^='#']").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(_href).offset().top + "px"
    });
    return false;
  });






});