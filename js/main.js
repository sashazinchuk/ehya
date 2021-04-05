$(document).ready(function () {
  const menuButton = document.querySelector('.humburger-menu');
  menuButton.addEventListener('click', function() {
  document.querySelector('.header-wrapper').classList.toggle('header-wrapper_visible');
  });

  const sliderCase = new Swiper('.slider-case', {
  
    loop: true,

    navigation: {
      nextEl: '.slider-case__button_next',
      prevEl: '.slider-case__button_prev',
    },

  });

  const sliderArticle = new Swiper('.slider-article', {
    loop: true,

    navigation: {
      nextEl: '.slider-article__button_next',
      prevEl: '.slider-article__button_prev',
    },
  });

});