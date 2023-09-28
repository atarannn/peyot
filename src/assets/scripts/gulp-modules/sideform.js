function formMobOpenAnim(evt, reverseArg) {
  const form = document.querySelector('.sideform');
  if (form === null) return;
  const tl = gsap.timeline({ paused: true });
  tl.add(() => {
    form.classList.add('active');
  });
  tl.fromTo(form, { autoAlpha: 0 },
    { autoAlpha: 1, ease: 'power4.easeInOut', duration: 0.5, clearProps: 'all' });
  tl.play();

  // Додаємо обробку кліку на весь документ для закриття форми при кліку поза кнопками.
  document.body.addEventListener('mousedown', closeFormOutside);
}

function formMobCloseAnim(evt, reverseArg) {
  const form = document.querySelector('.sideform');
  if (form === null) return;
  const ease = 'power4.easeOut';
  const tl = gsap.timeline({ paused: true });
  tl.fromTo(form, { autoAlpha: 1 },
    { ease: 'power4.easeInOut', duration: 0.5, autoAlpha: 0, delay: 0.1 }, '<');
  tl.add(() => {
    form.classList.remove('active');
  });
  tl.play();

  // Видаляємо обробку кліку на весь документ при закритті форми.
  document.body.removeEventListener('mousedown', closeFormOutside);
}

function closeFormOutside(evt) {
  const form = document.querySelector('.sideform');
  if (form === null) return;

  // Перевіряємо, чи елемент з атрибутом [data-form-popup-wrapper] не має класу active.
  const formWrapper = document.querySelector('[data-form-popup-wrapper]');
  if (formWrapper && !formWrapper.classList.contains('active')) {
    const buttons = document.querySelectorAll('.sideform ul li');

    // Перевіряємо, чи клікнуто поза кнопками форми.
    if (!Array.from(buttons).some(button => button.contains(evt.target))) {
      formMobCloseAnim();
      document.querySelector('body').style.overflow = 'auto';
    }
  }
}

const btnCallMobile = document.querySelectorAll('.js-mobile-call');
const btnCloseMobile = document.querySelector('.js-mobile-close');
const formMobile = document.querySelector('.sideform');
const form = document.querySelector('[data-form-wrapper]');

btnCallMobile.forEach(btn => {
  btn.addEventListener('click', () => {
    formMobile.classList.add('active');
    formMobOpenAnim();
    document.querySelector('body').style.overflow = 'hidden';
  });
});

btnCloseMobile.addEventListener('click', () => {
  formMobCloseAnim();
  document.querySelector('body').style.overflow = 'auto';
});
