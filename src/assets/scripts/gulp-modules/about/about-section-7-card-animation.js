gsap.timeline({scrollTrigger :{
    trigger: '.section-7__cards-scroll',
    scrub: true
  }})
  .to('.section-7__card', {
    scale: (e) => {
      return gsap.utils.mapRange(0, document.querySelectorAll('.section-7__card').length - 1, 0.92, 1, e);
      return 0.3;
    },
    stagger: 1 / document.querySelectorAll('.section-7__card').length,
  })
