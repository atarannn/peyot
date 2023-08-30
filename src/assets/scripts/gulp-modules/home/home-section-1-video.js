export default function screen1() {
  const videoBtn = document.querySelector('.section-1__video-btn');
  const videoWrapper = document.querySelector('.section-1__video');
  const videoElement = document.querySelector('.section-1__video video');
  const header = document.querySelector('header');

  if (document.documentElement.clientWidth > 680) {
    window.addEventListener('click', () => {
      videoElement.play();
    });
  }

  videoBtn.addEventListener('click', () => {
    if (videoElement.muted) {
      videoWrapper.classList.add('active');
      header.classList.add('hidden-for-video');
      videoElement.muted = false;
      videoElement.setAttribute('controls', 'true');
    } else {
      videoWrapper.classList.remove('active');
      header.classList.remove('hidden-for-video');
      videoElement.muted = true;
      videoElement.removeAttribute('controls');
    }
  });

  const playButtonMob = document.getElementById('playVideoButton');
  const videoMob = document.querySelector('myVideo');
  const videoMobWrapper = document.querySelector('.mobile-video__wrapper');
  const closeButtonMob = document.querySelector('.btn-close-video');

  playButtonMob.addEventListener('click', () => {
    videoMobWrapper.classList.add('active');
    videoMob.play();
  });

  closeButtonMob.addEventListener('click', () => {
    videoMobWrapper.classList.remove('active');
    videoMob.pause();
  });
}
