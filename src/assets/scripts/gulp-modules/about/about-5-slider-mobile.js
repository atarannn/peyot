const swiper = new Swiper('.section-5-mob-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 12,
  lazy: true,
  speed: 1000,
  watchSlidesVisibility: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
});
