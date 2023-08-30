export default function screen4() {
  const fullscreenButton = document.getElementById('fullscreen-btn');
  const dayButton = document.getElementById('day-btn');
  const nightButton = document.getElementById('night-btn');
  const zoomInButton = document.getElementById('zoom-in-btn');
  const zoomOutButton = document.getElementById('zoom-out-btn');

  const dayIframe = document.querySelector('.panorama-frame.day');
  const nightIframe = document.querySelector('.panorama-frame.night');

  fullscreenButton.addEventListener('click', () => {
    const activeIframe = document.querySelector('.panorama-frame.active');
    if (activeIframe) {
      if (activeIframe === dayIframe) {
        dayIframe.requestFullscreen();
      } else if (activeIframe === nightIframe) {
        nightIframe.requestFullscreen();
      }
    }
  });

  function switchIframe(iframe) {
    const activeIframe = document.querySelector('.panorama-frame.active');
    if (activeIframe) {
      activeIframe.classList.remove('active');
    }

    iframe.classList.add('active');
    currentScale = 1; // Скидаємо масштаб до початкового значення

    // Перезавантажуємо обробники подій для кнопок збільшення та зменшення масштабу
    zoomInButton.removeEventListener('click', applyScale);
    zoomOutButton.removeEventListener('click', applyScale);
    zoomInButton.addEventListener('click', applyScale);
    zoomOutButton.addEventListener('click', applyScale);
  }

  dayButton.addEventListener('click', () => {
    switchIframe(dayIframe);
  });

  nightButton.addEventListener('click', () => {
    switchIframe(nightIframe);
  });

  dayButton.addEventListener('click', () => {
    dayIframe.classList.add('active');
    nightIframe.classList.remove('active');
    dayButton.classList.add('active');
    nightButton.classList.remove('active');
  });

  nightButton.addEventListener('click', () => {
    dayIframe.classList.remove('active');
    nightIframe.classList.add('active');
    dayButton.classList.remove('active');
    nightButton.classList.add('active');
  });

  let currentScale = 1; // Початковий масштаб

  zoomInButton.addEventListener('click', () => {
    currentScale += 0.2; // Збільшуємо масштаб на 20%
    applyScale();
  });

  zoomOutButton.addEventListener('click', () => {
    currentScale -= 0.2; // Зменшуємо масштаб на 20%
    applyScale();
  });

  function applyScale() {
    if (currentScale < 1) {
      currentScale = 1; // Мінімальний масштаб
    }
    if (currentScale > 10) {
      currentScale = 10; // Максимальний масштаб
    }

    const activeIframe = document.querySelector('.panorama-frame.active');
    if (activeIframe) {
      activeIframe.style.transform = `scale(${currentScale})`;
    }
  };

  function switchIframe(iframe) {
    const activeIframe = document.querySelector('.panorama-frame.active');
    if (activeIframe) {
      activeIframe.classList.remove('active');
    }

    iframe.classList.add('active');
    currentScale = 1; // Скидаємо масштаб до початкового значення

    // Перезавантажуємо обробники подій для кнопок збільшення та зменшення масштабу
    zoomInButton.removeEventListener('click', applyScale);
    zoomOutButton.removeEventListener('click', applyScale);
    zoomInButton.addEventListener('click', applyScale);
    zoomOutButton.addEventListener('click', applyScale);
  };

  dayButton.addEventListener('click', () => {
    switchIframe(dayIframe);
  });

  nightButton.addEventListener('click', () => {
    switchIframe(nightIframe);
  });
}
