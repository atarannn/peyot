const swiper2 = new Swiper('.swiper-2', {
  spaceBetween: 12,
  slidesPerView: 1.05,
  centeredSlides: false,
  navigation: {
    nextEl: document.querySelector('[data-swiper-next-2]'),
    prevEl: document.querySelector('[data-swiper-prev-2]'),
  },
  lazy: true,
  speed: 1000,
  watchSlidesVisibility: true,

  breakpoints: {
    680: {
      spaceBetween: 40,
      slidesPerView: 'auto',
    }
  }
});

const big_swiper_gallery2 = new Swiper('.big-swiper_gallery2', {
  slidesPerView: 1,
  centeredSlides: false,
  initialSlide: 0,
  effect: 'fade',
  allowTouchMove: false,
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: document.querySelector('.big-swiper-gallery-swiper-right2'),
    prevEl: document.querySelector('.big-swiper-gallery-swiper-left2'),
  },
  speed: 1000
});

[...document.querySelector('.swiper-2').querySelectorAll('img')].forEach(img => {
  img.addEventListener('click', () => {
    const index2 = Array.from(img.closest('.swiper-2').querySelectorAll('.swiper-slide')).findIndex(el => {
      return el.querySelector('img') === img
    });

    console.log(index2);

    if (index2 >= 0) {
      big_swiper_gallery2.slideTo(index2);
    }
  });
});

[...document.querySelectorAll('.js-open-big-gallery2')].forEach(img =>
  img.addEventListener('click', () => {
    document.querySelector('.gallery-beckdrop2').classList.add('active');
    document.body.style.overflow = 'hidden';
  }),
);

document.querySelector('.js-close-big-gallery2').addEventListener('click', () => {
  document.querySelector('.gallery-beckdrop2').classList.remove('active');
  document.body.style.overflow = ' ';
});

swiper2.controller.control = big_swiper_gallery2;
