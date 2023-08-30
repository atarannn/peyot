export default function screen5Slider() {
  const screen5TopBlockHeight = 0;
  const isMobile = window.matchMedia('(max-width: 1024px)').matches;

  // !isMobile && gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.section-5__inner-bottom__wrapper',
  //     scrub: true,
  //     scroller: scroller ? scroller : null,
  //     end: `${innerHeight} bottom`,
  //   }
  // })

  !isMobile && gsap.timeline({
    scrollTrigger: {
      trigger: '.section-5__inner-bottom__wrapper', /**общий контейнер */
      scrub: 1,
      start: "top top",
      end: "top top"
    }
  })
    .to('.section-5__inner-bottom__card__wrapper', {y: 0, duration: 7}, '<')

  !isMobile && gsap.timeline({
    scrollTrigger: {
      trigger: '.section-5__inner-bottom__wrapper', /**общий контейнер */
      scrub: true,
      start: `${screen5TopBlockHeight} top`,
      end: `${document.querySelector('.section-5__inner-bottom__wrapper').getBoundingClientRect().height} bottom`,
      pin: '.section-5__inner-bottom',
    }
  })
    .to('.section-5__inner-bottom-hor-scroll' /*что будет скроллится*/, { x: (el, target) => {
      const horBlocksItems = document.querySelectorAll('.section-5__inner-bottom__card__wrapper'); //елементы внутри горизонтального контейнера

      return innerWidth + Array.from(horBlocksItems).reduce((acc, el) => {
        acc -= el.getBoundingClientRect().width;
        return acc;
      }, 0);
    },ease: 'none' }, '<')


}

