const list = document.querySelectorAll('.section-3__inner__list-card');
const btn = document.querySelectorAll('[data-view]');
const firstBtn = document.querySelector('[data-view="s-1"]');
const videos = document.querySelectorAll('.section-3__inner__list-card video');

firstBtn.classList.add('active');

function showCards(target) {
  list.forEach(elem => {
    elem.classList.add('active');
    if (!elem.classList.contains(target)) {
      elem.classList.remove('active');
    }
  });
}

btn.forEach(el => el.addEventListener('click', event => {
  if (event.target.tagName !== 'BUTTON') return false;
  const target = event.target.dataset.view;
  btn.forEach(button => {
    button.classList.remove('active');
  });
  el.classList.add('active');
  showCards(target);

  // Пауза для всех видео
  videos.forEach(video => {
    if (!video.paused) {
      video.pause();
    }
  });
}));

videos.forEach(video => {
  video.addEventListener('play', () => {
    // Пауза для всех остальных видео
    videos.forEach(otherVideo => {
      if (otherVideo !== video && !otherVideo.paused) {
        otherVideo.pause();
      }
    });
  });
});

// Вызываем обработчик клика на первой кнопке для начального состояния
showCards('s-1');
