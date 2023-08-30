const triggersSection2 = document.querySelectorAll('.section-2__info__right__card');

triggersSection2.forEach((trigger) => {
  const decorLineLeftMob = trigger.querySelector('.decor-left');
  const decorLineRightMob = trigger.querySelector('.decor-right');

  gsap
    .timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top 70%",
      },
    })
    .fromTo(decorLineLeftMob, {scaleX: 0, transformOrigin:"left"}, {scaleX: 1, ease: 'power4.easeInOut', duration: 1, clearProps: 'all' }, '<')
    .fromTo(decorLineRightMob, {scaleX: 0, transformOrigin:"right"}, {scaleX: 1, ease: 'power4.easeInOut', duration: 1, clearProps: 'all' }, '<');
});

const triggerSection3 = document.querySelector('.section-3');
const decorSection3 = triggerSection3.querySelector('.decor');

gsap
  .timeline({
    scrollTrigger: {
      trigger: triggerSection3,
      start: "top 70%",
    },
  })
  .fromTo(decorSection3, {scaleX: 0, transformOrigin:"right"}, {scaleX: 1, ease: 'power4.easeInOut', duration: 1, clearProps: 'all' }, '<')

const triggerSection5 = document.querySelector('.section-5');
const decorSection5 = triggerSection5.querySelector('.decor');

gsap
  .timeline({
    scrollTrigger: {
      trigger: triggerSection5,
      start: "top 70%",
    },
  })
  .fromTo(decorSection5, {scaleX: 0, transformOrigin:"left"}, {scaleX: 1, ease: 'power4.easeInOut', duration: 1, clearProps: 'all' }, '<')
