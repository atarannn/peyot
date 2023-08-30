const swiper1 = new Swiper('.swiper-1', {
  spaceBetween: 12,
  slidesPerView: 1.05,
  centeredSlides: false,
  navigation: {
    nextEl: document.querySelector('[data-swiper-next-1]'),
    prevEl: document.querySelector('[data-swiper-prev-1]'),
  },
  lazy: true,
  speed: 400,
  watchSlidesVisibility: true,

  breakpoints: {
    680: {
      spaceBetween: 40,
      slidesPerView: 'auto',
    }
  }
});

const big_swiper_gallery = new Swiper('.big-swiper_gallery', {
  slidesPerView: 1,
  centeredSlides: false,
  initialSlide: 0,
  effect: 'fade',
  allowTouchMove: false,
  fadeEffect: {
    crossFade: true
  },

  navigation: {
    nextEl: document.querySelector('.big-swiper-gallery-swiper-right'),
    prevEl: document.querySelector('.big-swiper-gallery-swiper-left'),
  },

  speed: 400
});


[...document.querySelector('.swiper-1').querySelectorAll('img')].forEach(img => {
  img.addEventListener('click', () => {
    const index = Array.from(img.closest('.swiper-1').querySelectorAll('.swiper-slide')).findIndex(el => {
      return el.querySelector('img') === img
    });

    if (index >= 0) {
      big_swiper_gallery.slideTo(index);
    }
  });
});

[...document.querySelectorAll('.js-open-big-gallery')].forEach(img =>
  img.addEventListener('click', () => {
    document.querySelector('.gallery-beckdrop').classList.add('active');
  }),
);

document.querySelector('.js-close-big-gallery').addEventListener('click', () => {
  document.querySelector('.gallery-beckdrop').classList.remove('active');
});

swiper1.controller.control = big_swiper_gallery;
