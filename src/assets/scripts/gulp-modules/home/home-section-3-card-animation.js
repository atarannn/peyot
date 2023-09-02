export default function screen3() {
  gsap.timeline({scrollTrigger :{
      trigger: '.section-3__cards-scroll',
      scrub: true
    }})
    .to('.section-3__card', {
      scale: (e) => {
        return gsap.utils.mapRange(0, document.querySelectorAll('.section-3__card').length - 1, 0.92, 1, e);
        return 0.7;
      },
      stagger: 1 / document.querySelectorAll('.section-3__card').length,
    })


  const swiper = new Swiper('.section-3__mobile', {
    slidesPerView: 1,
    spaceBetween: 12,
    lazy: true,
    speed: 1000,
    watchSlidesVisibility: true,
    direction: "vertical",
    effect: 'coverflow',
    allowTouchMove: false,
    coverflowEffect: {
      rotate: 0,
      depth: 200,
      stretch: 30,
      modifier: 1,
      scale: 1,
      slideShadows: false,
    },

    navigation: {
      nextEl: document.querySelector('.mobile-swiper-next'),
      prevEl: document.querySelector('.mobile-swiper-prev'),
    },
  });

}
