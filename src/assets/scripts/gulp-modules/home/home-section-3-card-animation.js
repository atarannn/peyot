export default function screen3() {
  gsap.timeline({scrollTrigger :{
      trigger: '.section-3__cards-scroll',
      scrub: true
    }})
    .to('.section-3__card', {
      scale: (e) => {
        console.log(e);
        return gsap.utils.mapRange(0, document.querySelectorAll('.section-3__card').length - 1, 0.92, 1, e);
        return 0.95;
      },
      stagger: 1 / document.querySelectorAll('.section-3__card').length,
    })
}
