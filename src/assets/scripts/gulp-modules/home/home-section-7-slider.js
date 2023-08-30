export default function galleryAnimation() {
  const  $sliderImages = Array.from(document.querySelectorAll('.section-7__card'));
  const sliderWidth = $sliderImages.reduce((acc,el) => {
    const margin = getComputedStyle(el).marginLeft ?
      parseInt(getComputedStyle(el).marginLeft) :
      0;
    console.log(margin);
    acc+=el.getBoundingClientRect().width + margin;
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
      onLeaveBack: () => {
        // gsap.to('.home-gallery__title, .home-gallery__remark, .home-gallery__delemiter', {
        //   y: '0'
        // })
      },
      onEnter: () => {
        // gsap.to('.home-gallery__title, .home-gallery__remark, .home-gallery__delemiter', {
        //   y: '50%'
        // })
      }
    }
  })
    .fromTo('.section-7-hor-scroll', {
      x: window.innerWidth  * 0.45
    },{
      x: (sliderWidth - window.innerWidth) * -1 - 100
    })

  console.log($sliderImages);

  $sliderImages.forEach(image => {
    gsap.timeline({
      defaults: {
        ease: 'none'
      },
      scrollTrigger: {
        trigger: image,
        containerAnimation: scrollTween,
        scrub: true,
        start: '0% left',
        end: '0% right'
      }
    })
      .fromTo(image, {
        // scale: 0.95
      }, {
        // scale: 1,
      })
  })

}
