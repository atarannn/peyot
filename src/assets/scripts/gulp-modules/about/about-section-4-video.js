const videoWrapper = document.querySelector('.section-4__right video');
const videoBtn = document.querySelector('.section-4__video-btn');

// Функция для воспроизведения и паузы видео
function toggleVideoPlayback() {
  if (videoWrapper.paused) {
    videoWrapper.play();
    videoWrapper.setAttribute('controls', 'true');
    videoBtn.classList.add('not-active');
  } else {
    videoWrapper.pause();
    videoWrapper.removeAttribute('controls');
    videoBtn.classList.remove('not-active');
  }
}

// Обработчик клика на кнопке
videoBtn.addEventListener('click', toggleVideoPlayback);

// Обработчик окончания видео
videoWrapper.addEventListener('ended', () => {
  videoWrapper.removeAttribute('controls');
  videoBtn.classList.remove('not-active');
});
