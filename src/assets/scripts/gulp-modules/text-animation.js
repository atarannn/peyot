window.addEventListener('load', () => {
  //з великою затримкою для внутрішнії сторінок
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
  splitToLinesAndFadeUp3('#id-page-gallery .section-1 .dark-text-48, .contacts .contacts__right .dark-text-36');

  // для тексту в середині внутрішніх сторінок
  function splitToLinesAndFadeUp4(selector, $scroller) {
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
            start: '0% center',
            once: true,
          },
        })
        .fromTo(
          text.querySelectorAll('span>span'),
          { yPercent: 100 },
          { yPercent: 0, stagger: 0.02, duration: 1, ease: "power4.out" }
        );
    });
  }
  splitToLinesAndFadeUp4('#id-page-gallery .section-2 .dark-text-48, #id-page-gallery .section-3 .dark-text-48, .last-news .dark-title');
});
