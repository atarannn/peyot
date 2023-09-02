document.getElementById('back-btn').addEventListener('click', () => {
  history.back();
});

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
newsAnimation('.news-list .news-card');
