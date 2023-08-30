export default function galleryAnimation() {
  const  $sliderImages = Array.from(document.querySelectorAll('.section-7__card'));
  const cardWidth = $sliderImages[0].offsetWidth;
  const sliderWidth = $sliderImages.reduce((acc,el) => {
    const margin = getComputedStyle(el).marginLeft ?
      parseInt(getComputedStyle(el).marginLeft) :
      0;
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
      x: window.innerWidth  * 0.4
    },{
      x: (sliderWidth - window.innerWidth) * -1 - (window.innerWidth - cardWidth)
    })

  console.log(cardWidth);

  $sliderImages.forEach(image => {
    gsap.timeline({
      defaults: {
        ease: 'none'
      },
      scrollTrigger: {
        trigger: image,
        containerAnimation: scrollTween,
        scrub: true,
        start: '-10% left',
        end: '80% left',
        markers: true,
        onEnter: () => {
          show(image);
        },
        onLeave: () => {
          hidden(image);
        },
      },
    })

    function show(image) {
      const img = image.querySelector('.section-7__card__decor img');
      const imgBg = image.querySelector('.section-7__card__decor');

      img.style.transform = 'scale(20)';
      img.style.transition = 'transform .3s ease-in-out';
      imgBg.style.opacity = '0';
      imgBg.style.transition = 'opacity .3s .3s ease-in-out';
    }

    function hidden(image) {
      const img = image.querySelector('.section-7__card__decor img');
      const imgBg = image.querySelector('.section-7__card__decor');

      imgBg.style.opacity = '0';
      imgBg.style.transition = 'opacity .3s ease-in-out';
      img.style.transform = 'scale(1)';
      img.style.transition = 'transform .3s .3s ease-in-out';
    }
  })
}
