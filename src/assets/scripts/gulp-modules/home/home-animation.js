window.addEventListener('load', () => {
  function headerAnimation(selector, $scroller) {
    gsap.timeline({
      scrollTrigger: {
        scroller: $scroller || document.body,
        trigger: selector,
        once: true,
      },
    })
      .fromTo(
        selector,
        { top: '-100%' },
        { top: 0, delay: 1.2, duration: 1, ease: "power4.out" }
      );
  }
  headerAnimation('header');

  function mainTextAnimation(selector, $scroller) {
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
          { yPercent: 0, delay: 1, stagger: 0.1, duration: 1, ease: "power4.out" }
        );
    });
  }
  mainTextAnimation('.section-1__info-top__title .light-title');

  function newsAnimationForSection1(selector, $scroller) {
    if (document.documentElement.clientWidth > 1024) {
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
          { autoAlpha: 1, yPercent: 0, stagger: 0.2, delay: 1.2, duration: 1, ease: "power4.out" }
        );
    } else {
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
            { autoAlpha: 0, yPercent: 100 },
            { autoAlpha: 1, yPercent: 0, stagger: 0.2, delay: 1.2, duration: 1, ease: "power4.out" }
          );
      })
    }
  }
  newsAnimationForSection1('.section-1__info-top__news');

  function opacityAnimation(selector, $scroller) {
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
          { autoAlpha: 0, yPercent: 100},
          { autoAlpha: 1, yPercent: 0, delay: 1.5, duration: 1, ease: "power4.out" }
        );
    })
  }
  opacityAnimation('.section-1__info-bottom-location, .section-1__info-bottom-arrow-down, .section-1__video, #playVideoButton');

  function splitToLinesAndFadeUp(selector, $scroller) {
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
  splitToLinesAndFadeUp('.section-4__head .dark-title, .section-8__head .dark-title, .section-5__inner-top__info .light-text-48, .section-5__inner-top__info .light-text-16');

  function splitToLinesAndFadeUp3(selector, $scroller) {
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
  splitToLinesAndFadeUp3('.section-3__card-left .dark-text-48, .section-3__card-left .dark-text-24, .section-3__card-left .dark-text-16');

  function transformAnimation(selector, $scroller) {
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
  transformAnimation('.section-5__inner-top__info svg, .section-8__head-btn');

  function transformAnimation2(selector, $scroller) {
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
  transformAnimation2('.section-3__card-left svg');

  function newsAnimation(selector, $scroller) {
   if (document.documentElement.clientWidth > 1024) {
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
         { yPercent: 100, autoAlpha: 0 },
         { yPercent: 0, autoAlpha: 1, stagger: 0.2, duration: 1, ease: "power4.out" }
       );
   } else {
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
           { yPercent: 100, autoAlpha: 0 },
           { yPercent: 0, autoAlpha: 1, stagger: 0.2, duration: 2, ease: "power4.out" }
         );
     })
   }
  }
  newsAnimation('.section-8__news-list .news-card');

  function opacityAnimation2(selector, $scroller) {
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
          { autoAlpha: 0, yPercent: 100},
          { autoAlpha: 1, yPercent: 0, delay: 0.2, duration: 1, ease: "power4.out" }
        );
    })
  }
  opacityAnimation2('.section-5__inner-bottom__card-bottom .row');

  function splitToLinesAndFadeUp2(selector, $scroller) {
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
  splitToLinesAndFadeUp2('.section-5__inner-bottom__card-bottom .light-text-48, .section-5__inner-bottom__card-bottom .light-text-16');

  function paralaxAnimation(selector, $scroller) {
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
  paralaxAnimation('.section-3__card-right');

  function paralaxAnimation2(selector, $scroller) {
    document.querySelectorAll(selector).forEach(img => {
      img.style.transform = 'scale(1.1)';
      const wrapper = document.createElement('div');
      wrapper.style.overflow = 'hidden';
      img.parentNode.insertBefore(wrapper, img);
      wrapper.appendChild(img);

      if (document.documentElement.clientWidth > 1024) {
        let tl = gsap
          .timeline({
            paused: true,
            scrollTrigger: {
              scroller: $scroller || document.body,
              trigger: wrapper,
              scrub: 2,
              start: '0% left',
            },
          })
          .fromTo(
            img,
            { y: 20 },
            { y: 0, duration: 1, ease: "power4.out" }
          );
      } else {
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
            { scale: 1, duration: 2, delay: 0.5, ease: "power4.out" }
          );
      }
    });
  }
  paralaxAnimation2('.section-5__inner-bottom__card img');

  function opacityAnimationForIframe(selector, $scroller) {
    document.querySelectorAll(selector).forEach(block => {
      gsap.timeline({
        scrollTrigger: {
          scroller: $scroller || document.body,
          trigger: block,
          start: '-100% center',
          once: true,
        },
      })
        .fromTo(
          block,
          { autoAlpha: 0, yPercent: 100},
          { autoAlpha: 1, yPercent: 0, duration: 2, ease: "power4.out"}
        )

    })
  }
  opacityAnimationForIframe('.section-4__panorama');
})
