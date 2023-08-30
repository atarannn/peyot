export default function screen5() {
  const section5 = document.querySelector('.section-5__head');
  const screenHeight = window.innerHeight;

  if (document.documentElement.clientWidth > 1023) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: section5,
          pin: ".section-5__head",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
      .fromTo('.section-5__head .top', {y: 0},{ y: -100, duration: 5 }, '<')
      .fromTo('.section-5__head .bottom', {y: 0},{ y: 100, duration: 5 }, '<')
      .fromTo('.section-5__head .center', {height: 0},{height: screenHeight * 1.5, duration: 5 }, '<')
  } else {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: section5,
          pin: ".section-5__head",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
      .fromTo('.section-5__head .top', {y: 0},{ y: -100, duration: 2 }, '<')
      .fromTo('.section-5__head .bottom', {y: 0},{ y: 100, duration: 2 }, '<')
      .fromTo('.section-5__head .center', {height: 0},{height: screenHeight * 1.2, duration: 2 }, '<')
  }
}
