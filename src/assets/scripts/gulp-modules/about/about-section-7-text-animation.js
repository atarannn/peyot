const section7 = document.querySelector('.section-7__head');
const screenHeight = window.innerHeight;

if (document.documentElement.clientWidth > 1024) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: section7,
        pin: ".section-7__head",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    })
    .fromTo('.section-7__head .top', {y: 0},{ y: -100, duration: 5 }, '<')
    .fromTo('.section-7__head .bottom', {y: 0},{ y: 100, duration: 5 }, '<')
    .fromTo('.section-7__head .center', {height: 0},{height: screenHeight * 1.5, duration: 5 }, '<')
} else {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: section7,
        pin: ".section-7__head",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    })
    .fromTo('.section-7__head .top', {y: 0},{ y: -100, duration: 2 }, '<')
    .fromTo('.section-7__head .bottom', {y: 0},{ y: 100, duration: 2 }, '<')
    .fromTo('.section-7__head .center', {height: 0},{height: screenHeight * 1.5, duration: 1 }, '<')
}

