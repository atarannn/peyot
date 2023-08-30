window.onload = function () {
    document.body.classList.add('loaded_hiding');
    document.body.style.overflow = 'hidden';

    window.setTimeout(() => {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
      document.body.style.overflow = 'auto';

    }, 500);
};
