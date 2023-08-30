window.onload = function () {
  window.setTimeout(() => {
    document.body.classList.add('loading');

    const header = document.querySelector('header');
    const breadcrumbs = document.querySelector('.breadcrumbs-title-for-animation');
    const lineTop = document.querySelector('.breadcrumbs .top-decor');
    const lineBottom = document.querySelector('.breadcrumbs .bottom-decor');
    const pageInner = document.querySelector('.page__wrapper');

    const mobileDecor = document.querySelectorAll('.mob-animation');

    const tl = gsap.timeline({ paused: true });
    tl.fromTo(lineTop, {scaleX: 0, transformOrigin:"left"},
      {scaleX: 1, ease: 'power4.easeInOut', duration: 1, clearProps: 'all' }, '<');
    tl.fromTo(lineBottom, {scaleX: 0, transformOrigin:"right"},
      {scaleX: 1, ease: 'power4.easeInOut', duration: 1, clearProps: 'all' }, '<');
    tl.fromTo(pageInner, {autoAlpha: 0, y: 200},
      {autoAlpha: 1, y: 0, ease: 'power4.easeInOut', duration: 1, delay: .5, clearProps: 'all' }, '<');
    tl.fromTo(header, {yPercent: -100 },
      {yPercent: 0, ease: 'power4.easeInOut', duration: 1, clearProps: 'all' }, '<');
    tl.fromTo(breadcrumbs, {autoAlpha: 0, yPercent: 100 },
      {autoAlpha: 1, yPercent: 0, ease: 'power4.easeInOut', duration: 1, clearProps: 'all' }, '<');
    tl.fromTo(mobileDecor, {autoAlpha: 0},
      {autoAlpha: 1, ease: 'power4.easeInOut', duration: 1, clearProps: 'all' }, '<');
    tl.play();
  }, 500);
};
