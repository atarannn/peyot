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
        x: (window.innerWidth * .5) - (window.innerWidth - cardWidth)
        // x: 0
      },{
        x: (sliderWidth - window.innerWidth) * -1 - (window.innerWidth - cardWidth)
      });

    $sliderImages.forEach((image, index) => {
      let startValue = '-50% left';
      let endValue = '0% left';

      let startValue2 = '-10% left';
      let endValue2 = '0% left';

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
        }
      })
        .fromTo(image.querySelector('.section-7__card__decor img'), {
          scale: 1,
        }, {
          scale: 5,
        })

      gsap.timeline({
        defaults: {
          ease: 'none'
        },
        scrollTrigger: {
          trigger: image,
          containerAnimation: scrollTween,
          scrub: true,
          start: startValue2,
          end: endValue2,
        }
      })
        .fromTo(image.querySelector('.section-7__card__decor'), {
          autoAlpha: 1,
        }, {
          autoAlpha: 0,
        });
    })
  } else {
    $sliderImages.forEach((image, index) => {
      let startValue3 = '20% bottom';
      let endValue3 = '50% bottom';

      gsap.timeline({
        defaults: {
          ease: 'none'
        },
        scrollTrigger: {
          trigger: image,
          scrub: true,
          start: startValue3,
          end: endValue3,
        }
      })
        .fromTo(image.querySelector('.section-7__card__decor img'), {
          scale: 1,
          transition: 1,
        }, {
          scale: 5,
          transition: 1,
        })
        .fromTo(image.querySelector('.section-7__card__decor'), {
          autoAlpha: 1,
          transition: 1,
        }, {
          autoAlpha: 0,
          transition: 1,
        });
    })
  }
}
