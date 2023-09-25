const swiper1 = new Swiper('.swiper-1', {
  spaceBetween: 12,
  slidesPerView: 1.05,
  centeredSlides: false,
  navigation: {
    nextEl: document.querySelector('[data-swiper-next-1]'),
    prevEl: document.querySelector('[data-swiper-prev-1]'),
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

  speed: 1000
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
    // document.body.style.overflow = 'hidden';
  }),
);

document.querySelector('.js-close-big-gallery').addEventListener('click', () => {
  document.querySelector('.gallery-beckdrop').classList.remove('active');
  // document.body.style.overflow = '';
});

swiper1.controller.control = big_swiper_gallery;


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
    // document.body.style.overflow = 'hidden';
  }),
);

document.querySelector('.js-close-big-gallery2').addEventListener('click', () => {
  document.querySelector('.gallery-beckdrop2').classList.remove('active');
  // document.body.style.overflow = ' ';
});

swiper2.controller.control = big_swiper_gallery2;

const list = document.querySelectorAll('.section-3__inner__list-card');
const btn = document.querySelectorAll('[data-view]');
const firstBtn = document.querySelector('[data-view="s-2"]');
const videos = document.querySelectorAll('.section-3__inner__list-card video');

firstBtn.classList.add('active');

function showCards(target) {
  list.forEach(elem => {
    elem.classList.add('active');
    if (!elem.classList.contains(target)) {
      elem.classList.remove('active');
    }
  });
}

btn.forEach(el => el.addEventListener('click', event => {
  if (event.target.tagName !== 'BUTTON') return false;
  const target = event.target.dataset.view;
  btn.forEach(button => {
    button.classList.remove('active');
  });
  el.classList.add('active');
  showCards(target);

  // Пауза для всех видео
  videos.forEach(video => {
    if (!video.paused) {
      video.pause();
    }
  });
}));

videos.forEach(video => {
  video.addEventListener('play', () => {
    // Пауза для всех остальных видео
    videos.forEach(otherVideo => {
      if (otherVideo !== video && !otherVideo.paused) {
        otherVideo.pause();
      }
    });
  });
});

// Вызываем обработчик клика на первой кнопке для начального состояния
showCards('s-2');
