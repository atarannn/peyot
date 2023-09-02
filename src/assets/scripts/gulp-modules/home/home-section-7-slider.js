export default function galleryAnimation($scroller) {
  const  $sliderImages = Array.from(document.querySelectorAll('.section-7__card'));

  if (document.documentElement.clientWidth > 1024) {
    const cardWidth = $sliderImages[0].offsetWidth;
    const sliderWidth = $sliderImages.reduce((acc,el) => {
      acc+=el.getBoundingClientRect().width;
      return acc;
    }, 0);

    gsap.set('.section-7', {
      height: sliderWidth
    });

    let scrollTween = gsap.timeline({
      defaults: {
        ease: 'none'
      },
      scrollTrigger: {
        trigger: '.section-7',
        pin: '.section-7__wrapper',
        scrub: true,
        end: '100% bottom',
      }
    })
      .fromTo('.section-7-hor-scroll', {
        x: (window.innerWidth * .5) - (cardWidth / 2)
        // x: 0
      },{
        x: (sliderWidth - window.innerWidth) * -1 - (window.innerWidth - cardWidth) - (cardWidth * 0.3)
      });

    $sliderImages.forEach((image, index) => {
      const imageTimeline = gsap.timeline({
        paused: true,
      })
        .fromTo(image.querySelector('.section-7__card .main-img'), {
          autoAlpha: 0,
        }, {
          autoAlpha: 1,
        })
        .fromTo(image.querySelector('.section-7__card__decor img'), {
          scale: 1,
        }, {
          scale: 12,
          duration: .5,
        })
        .fromTo(image.querySelector('.section-7__card__decor'), {
          autoAlpha: 1,
          duration: .2,
          delay: 0,
        }, {
          autoAlpha: 0,
          duration: .2,
          delay: .5
        }, '<');

      let startValue = '-10% left';
      let endValue = '50% left';

      // Перевірка, чи це остання картка
      if (index === $sliderImages.length - 1) {
        startValue = '-20% left';
        endValue = '30% left';
      }

      gsap.timeline({
        defaults: {
          ease: 'none'
        },
        scrollTrigger: {
          trigger: image,
          containerAnimation: scrollTween,
          scrub: true,
          start: startValue,
          end: endValue,
          onEnterBack: () => {
            imageTimeline.play();
          },
          onEnter: () => {
            imageTimeline.play();
          },
          onLeaveBack: () => {
            imageTimeline.reverse();
          },
          onLeave: () => {
            imageTimeline.reverse();
          },
        }
      })
    })
  } else {
    $sliderImages.forEach((image, index) => {
      const imageTimeline2 = gsap.timeline({
        paused: true,
      })
        .fromTo(image.querySelector('.section-7__card .main-img'), {
          autoAlpha: 0,
        }, {
          autoAlpha: 1,
        })
        .fromTo(image.querySelector('.section-7__card__decor img'), {
          scale: 1,
        }, {
          scale: 4,
          duration: .5,
        })
        .fromTo(image.querySelector('.section-7__card__decor'), {
          autoAlpha: 1,
          duration: .2,
          delay: 0,
        }, {
          autoAlpha: 0,
          duration: .2,
          delay: .3
        }, '<');

      let startValue2 = '0% bottom';
      let endValue2 = '120% bottom';

      gsap.timeline({
        defaults: {
          ease: 'none'
        },
        scrollTrigger: {
          trigger: image,
          scrub: true,
          start: startValue2,
          end: endValue2,

          onEnterBack: () => {
            imageTimeline2.play();
          },
          onEnter: () => {
            imageTimeline2.play();
          },
          onLeaveBack: () => {
            imageTimeline2.reverse();
          },
          onLeave: () => {
            imageTimeline2.reverse();
          },
        }
      })
    })
  }
}
