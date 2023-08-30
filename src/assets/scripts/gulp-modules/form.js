function formOpen(form) {
  form.forEach(el => {
    document.querySelector('body').style.overflow = 'hidden';
    formOpenAnim();
  });
}

function formClose(form) {
  form.forEach(el => {
    document.querySelector('body').style.overflow = 'auto';

    if (document.querySelector('.sideform').classList.contains('active')) {
      document.querySelector('body').style.overflow = 'hidden';
    }

    formCloseAnim();
  });
}

function formOpenAnim(evt, reverseArg) {
  const form = document.querySelectorAll('[data-form-popup-wrapper]');
  const formClose = document.querySelector('[data-close-form]');
  const tl = gsap.timeline({ paused: true });
  tl.add(() => {
    form.forEach(el => {
      el.classList.add('active');
    });
  });
  tl.fromTo(form, {autoAlpha: 0},
    {autoAlpha: 1,  ease: 'power4.easeInOut', duration: 0.4, clearProps: 'all' }, '<');
  tl.fromTo(formClose, {y: -200},
    { y: 0, ease: 'power4.easeInOut', duration: 0.4, delay: 0.4, clearProps: 'all' }, '<');
  tl.play();
}

function formCloseAnim(evt, reverseArg) {
  const form = document.querySelector('[data-form-popup-wrapper]');
  const tl = gsap.timeline({ paused: true });
  tl.fromTo(form, {autoAlpha: 1},
    { autoAlpha: 0, ease: 'power4.easeInOut', duration: 0.2 }, '<');
  tl.add(() => {
    form.classList.remove('active');
  });
  tl.play();
}

function formInit() {
  const form = document.querySelectorAll('[data-form-popup-wrapper]');

  document.body.addEventListener('click',function openCallbackForm(evt){
    const target = evt.target.closest('[data-call-form]');
    if (!target) return;
    formOpen(form);
  });
  document.body.addEventListener('click',function closeCallbackForm(evt){
    const target = evt.target.closest('[data-close-form]');
    if (!target) return;
    formClose(form);
  });
}


function init() {
  formInit();
}

window.addEventListener('DOMContentLoaded', init);
