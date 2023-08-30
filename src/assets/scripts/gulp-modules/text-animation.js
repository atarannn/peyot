window.addEventListener('load', () => {
  function splitToLettersAndFadeUp(selector, $scroller) {
    document.querySelectorAll(selector).forEach(text => {
      const letters = text.innerText.trim().split('');
      text.innerHTML = letters.map(letter => `<span style="display:inline-flex; overflow: hidden"><span>${letter}</span></span>`).join('');

      const tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
          scroller: $scroller || document.body,
          trigger: text,
          once: true,
        },
      }).fromTo(
        text.querySelectorAll('span>span'),
        { yPercent: 100 },
        { yPercent: 0, delay: 0.4, stagger: 0.05, duration: 1.3, ease: "power4.out" }, '<'
      );
    });
  }

  splitToLettersAndFadeUp('.section-1__info-top__title .light-title');

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
          { yPercent: 0, delay: 0.3, stagger: 0.02, duration: 1, ease: "power4.out" }
        );
    });
  }
  splitToLinesAndFadeUp2('.section-3__info .dark-text-52, .section-4__left .dark-text-52, .section-5__left .dark-text-52, .last-news .dark-title, .section-4__head .dark-title, .section-8__head .dark-title, .section-6 .form .dark-text-36');

  //з великою затримкою
  function splitToLinesAndFadeUp3(selector, $scroller) {
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
          { yPercent: 0, delay: 1.5, stagger: 0.02, duration: 1, ease: "power4.out" }
        );
    });
  }
  splitToLinesAndFadeUp3('.section-2__head .dark-text-52, #id-page-gallery .section-1 .dark-text-48, #id-page-gallery .section-2 .dark-text-48, #id-page-gallery .section-3 .dark-text-48, .contacts .contacts__right .dark-text-36');
});
