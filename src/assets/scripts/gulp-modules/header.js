document.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const header = document.querySelector('header');

  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    header.classList.add('not-top');
  } else {
    header.classList.remove('not-top');
  }
}

// Вибір елементу .animation-inner
const animationInner = document.querySelectorAll('.animation-inner');

// Налаштування анімації за допомогою GSAP та ScrollTrigger
gsap.to(animationInner, {
  scrollTrigger: {
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
  },
  y: '-20%',
  duration: 3,
});

