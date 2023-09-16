const imgTriggerSection2 = document.querySelectorAll('.section-2__info__right__card');

imgTriggerSection2.forEach((trigger) => {
  const imgSection2 = trigger.querySelector('.item__fig');

  gsap
    .timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "100% bottom",
        end: "50% bottom",
        once: true,
      },
    })
    .fromTo(imgSection2, {autoAlpha: 1}, {autoAlpha: 0, delay: 0.5, ease: 'power4.easeInOut', duration: .5}, '<')
});


const triggersSection2 = document.querySelectorAll('.section-2__info__right__card');

triggersSection2.forEach((trigger) => {
  const decorLineLeftMob = trigger.querySelector('.decor-left');
  const decorLineRightMob = trigger.querySelector('.decor-right');

  gsap
    .timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "20% bottom",
        once: true,
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
      start: "120% bottom",
      once: true,
    },
  })
  .fromTo(decorSection3, {scaleX: 0, transformOrigin:"right"}, {scaleX: 1, ease: 'power4.easeInOut', duration: 1, clearProps: 'all' }, '<')

const triggerSection5 = document.querySelector('.section-5');
const decorSection5 = triggerSection5.querySelector('.decor');

gsap
  .timeline({
    scrollTrigger: {
      trigger: triggerSection5,
      start: "20% bottom",
      once: true,
    },
  })
  .fromTo(decorSection5, {scaleX: 0, transformOrigin:"left"}, {scaleX: 1, ease: 'power4.easeInOut', duration: 1, clearProps: 'all' }, '<')

// для першого екрану з великою затримкою
function aboutTransformAnimation(selector, $scroller) {
  document.querySelectorAll(selector).forEach(img => {
    const wrapper = document.createElement('div');
    wrapper.style.overflow = 'hidden';
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);

    let tl = gsap
      .timeline({
        paused: true,
        scrollTrigger: {
          scroller: $scroller || document.body,
          trigger: wrapper,
          once: true,
        },
      })
      .fromTo(
        img,
        { yPercent: 200 },
        { yPercent: 0, delay: 1.8, duration: 1, ease: "power4.out" }
      );
  });
}
aboutTransformAnimation('.section-2__head__right svg');

// для першого екрану з великою затримкою section-1 section-2
function aboutFirstScreenText(selector, $scroller) {
  document.querySelectorAll(selector).forEach(text => {
    let mathM = text.innerHTML.match(/<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g);
    if (mathM === null) return;
    mathM = mathM.map(el => `<span style="display:inline-flex; overflow: hidden"><span>${el}</span></span>`);
    text.innerHTML = mathM.join(' ');

    let tl = gsap
      .timeline({
        paused: true,
        scrollTrigger: {
          scroller: $scroller || document.body,
          trigger: text,
          once: true,
        },
      })
      .fromTo(
        text.querySelectorAll('span>span'),
        { yPercent: 100 },
        { yPercent: 0, stagger: 0.02, delay: 2, duration: 1, ease: "power4.out" }
      );
  });
}
aboutFirstScreenText('.section-1__text, .section-2__head .dark-text-52, .section-2__head__right .dark-text-20');

// для тексту в середині
function aboutText(selector, $scroller) {
  document.querySelectorAll(selector).forEach(text => {
    let mathM = text.innerHTML.match(/<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g);
    if (mathM === null) return;
    mathM = mathM.map(el => `<span style="display:inline-flex; overflow: hidden"><span>${el}</span></span>`);
    text.innerHTML = mathM.join(' ');

    let tl = gsap
      .timeline({
        paused: true,
        scrollTrigger: {
          scroller: $scroller || document.body,
          trigger: text,
          start: '0% bottom',
          once: true,
        },
      })
      .fromTo(
        text.querySelectorAll('span>span'),
        { yPercent: 100 },
        { yPercent: 0, stagger: 0.02, delay: .5, duration: 1, ease: "power4.out" }
      );
  });
}
aboutText('.section-2__info__right__card .dark-text-36, .section-3__info .dark-text-52, .section-4__left .dark-text-52, .section-5__left .dark-text-52, .section-6 .form .dark-text-36, .section-7__inner__block__right .light-text-36, .section-7__inner__block__right .light-text-16');

// з малою затримкою
function aboutText2(selector, $scroller) {
  if (document.documentElement.clientWidth > 680) {
    document.querySelectorAll(selector).forEach(text => {
      let mathM = text.innerHTML.match(/<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g);
      if (mathM === null) return;
      mathM = mathM.map(el => `<span style="display:inline-flex; overflow: hidden"><span>${el}</span></span>`);
      text.innerHTML = mathM.join(' ');

      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: text,
            start: '0% bottom',
            once: true,
          },
        })
        .fromTo(
          text.querySelectorAll('span>span'),
          { yPercent: 100 },
          { yPercent: 0, stagger: 0.02, delay: .5, duration: 1, ease: "power4.out" }
        );
    });
  }
}
aboutText2('.section-5__right__card .dark-text-36');

// анімація тексту для кароток
function aboutSplitToLinesAndFadeUp(selector, $scroller) {
  if (document.documentElement.clientWidth > 680) {
    document.querySelectorAll(selector).forEach(text => {
      let mathM = text.innerHTML.match(/<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g);
      if (mathM === null) return;
      mathM = mathM.map(el => `<span style="display:inline-flex; overflow: hidden"><span>${el}</span></span>`);
      text.innerHTML = mathM.join(' ');

      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: text,
            once: true,
          },
        })
        .fromTo(
          text.querySelectorAll('span>span'),
          { yPercent: 100 },
          { yPercent: 0, delay: 0.5, stagger: 0.05, duration: 1, ease: "power4.out" }
        );
    });
  }
}
aboutSplitToLinesAndFadeUp('.section-7__card-left__top .light-text-24, .section-7__card-left .light-text-36, .section-7__card-left .light-text-16');

// без затримки, анімація для svg
function aboutTransformAnimation2(selector, $scroller) {
  if (document.documentElement.clientWidth > 680) {
    document.querySelectorAll(selector).forEach(img => {
      const wrapper = document.createElement('div');
      wrapper.style.overflow = 'hidden';
      img.parentNode.insertBefore(wrapper, img);
      wrapper.appendChild(img);

      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: wrapper,
            once: true,
          },
        })
        .fromTo(
          img,
          { yPercent: 200 },
          { yPercent: 0, delay: 0.5, duration: 1, ease: "power4.out" }
        );
    });
  }
}
aboutTransformAnimation2('.section-7__card-left__top svg');

function paralaxAnimationForImg(selector, $scroller) {
  if (document.documentElement.clientWidth > 680) {
    document.querySelectorAll(selector).forEach(img => {
      img.style.overflow = 'hidden';
      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: img,
            scrub: 2,
            start: '0% bottom',
          },
        })
        .fromTo(
          img.querySelector('img'),
          { scale: 1.2 },
          { scale: 1, duration: 2, delay: 0.5, ease: "power4.out" }
        );
    });
  }
}
paralaxAnimationForImg('.section-7__card-right');

function paralaxAnimationForImg2(selector, $scroller) {
  document.querySelectorAll(selector).forEach(img => {
    if (document.documentElement.clientWidth > 680) {
      const wrapper = document.createElement('div');
      wrapper.style.overflow = 'hidden';
      img.parentNode.insertBefore(wrapper, img);
      wrapper.appendChild(img);

      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: $scroller || document.body,
            trigger: wrapper,
            scrub: 2,
            start: '0% bottom',
          },
        })
        .fromTo(
          img,
          { scale: 1.2 },
          { scale: 1, duration: 2, ease: "power4.out" }
        );
    }
  });
}
paralaxAnimationForImg2('.section-5__right__card img');

function transformAnimationForCard(selector, $scroller) {
  if (document.documentElement.clientWidth > 680) {
    document.querySelectorAll(selector).forEach(block => {
      gsap.timeline({
        scrollTrigger: {
          scroller: $scroller || document.body,
          trigger: block,
          once: true,
        },
      })
        .fromTo(
          block,
          { yPercent: 20, autoAlpha: 0},
          { yPercent: 0, autoAlpha: 1, stagger: 0.2, duration: 2, ease: "power4.out" }
        );
    })
  }
}
transformAnimationForCard('.section-5__right__card');

function opacityAnimationForVideo(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    gsap.timeline({
      scrollTrigger: {
        scroller: $scroller || document.body,
        trigger: block,
        start: '0% bottom',
        once: true,
      },
    })
      .fromTo(
        block,
        { autoAlpha: 0, xPercent: 100},
        { autoAlpha: 1, xPercent: 0, delay: .5, duration: 2, ease: "power4.out"}
      )
      .fromTo(
        document.querySelector('.section-4__video-btn'),
        {autoAlpha: 0},
        {autoAlpha: 1, duration: .2, delay: 1.5}, '<');
  })
}
opacityAnimationForVideo('.section-4__right video');

function transformAnimationBlock(selector, $scroller) {
  if (document.documentElement.clientWidth > 680) {
    const blocks = document.querySelectorAll(selector);
    gsap.timeline({
      scrollTrigger: {
        scroller: $scroller || document.body,
        trigger: blocks,
        once: true,
      },
    })
      .fromTo(
        blocks,
        { autoAlpha: 0, yPercent: 100 },
        { autoAlpha: 1, yPercent: 0, stagger: 0.2, duration: 1, ease: "power4.out" }
      );
  }
}
transformAnimationBlock('.section-4__info-row');

function opacityAnimationForText(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    gsap.timeline({
      scrollTrigger: {
        scroller: $scroller || document.body,
        trigger: block,
        start: '0% bottom',
        once: true,
      },
    })
      .fromTo(
        block,
        { autoAlpha: 0, yPercent: 30, skewY: 2},
        { autoAlpha: 1, yPercent: 0, skewY: 0, delay: 0.5, duration: 1, ease: "power4.out"}
      )
  })
}
opacityAnimationForText('.section-7__inner__text, .section-7__inner__block__right .btn-style');

function opacityAnimationForImg(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    gsap.timeline({
      scrollTrigger: {
        scroller: $scroller || document.body,
        trigger: block,
        start: '0% bottom',
        once: true,
      },
    })
      .fromTo(
        block,
        { autoAlpha: 0, xPercent: -100},
        { autoAlpha: 1, xPercent: 0, delay: 1, duration: 2, ease: "power4.out"}
      )

    // let tl = gsap
    //   .timeline({
    //     paused: true,
    //     scrollTrigger: {
    //       scroller: $scroller || document.body,
    //       trigger: block,
    //       scrub: 2,
    //       start: '0% bottom',
    //     },
    //   })
    //   .fromTo(
    //     block,
    //     { scale: 1.2 },
    //     { scale: 1, duration: 2, delay: 0.5, ease: "power4.out" }
    //   );
  })
}
opacityAnimationForImg('.section-7__inner__block__left img');

function transformAnimationForImg(selector, $scroller) {
  document.querySelectorAll(selector).forEach(block => {
    gsap.timeline({
      scrollTrigger: {
        scroller: $scroller || document.body,
        trigger: block,
        once: true,
      },
    })
      .fromTo(
        block,
        { yPercent: 20, autoAlpha: 0},
        { yPercent: 0, autoAlpha: 1, stagger: 0.2, duration: 2, ease: "power4.out" }
      );
  })
}
transformAnimationForImg('.item__img, .item__img-mobile');
