const list = document.querySelectorAll('.news-card');
const btnNews = document.querySelectorAll('[data-view]');

btnNews.forEach(el => el.addEventListener('click', (event) => {
  if (event.target.tagName != 'BUTTON') return false;
  const target = event.target.dataset.view;
  console.log(target);
  btnNews.forEach(button => {
    console.log(button);
    button.classList.remove('active');
  });
  el.classList.add('active');
  list.forEach((elem) => {
    elem.classList.remove('hide');
    if (!elem.classList.contains(target) && target != 'all') {
      elem.classList.add('hide');
    }
  });
}));

function news(selector, $scroller) {
  const blocks = document.querySelectorAll(selector);
  gsap.timeline({
    scrollTrigger: {
      scroller: $scroller || document.body,
      trigger: document.querySelector('.news-list'),
      once: true,
    },
  })
    .fromTo(
      blocks,
      { yPercent: 100, autoAlpha: 0 },
      { yPercent: 0, autoAlpha: 1, delay: 1.4, stagger: 0.2, duration: 1, ease: "power4.out" }
    );
}
news('.news-card');
