function handleButtonClick(targetSection) {
  const scrollY = targetSection.getBoundingClientRect().top + window.pageYOffset - 200;
  window.scrollTo({
    top: scrollY,
    behavior: 'smooth'
  });
}

function scrollAnimation() {
  const section = document.getElementById("section-4");
  const arrowDown = document.querySelector('.section-2__head__right .arrow__down');

  if (section && arrowDown) {
    arrowDown.removeAttribute('href');
    arrowDown.addEventListener('click', function(evt) {
      evt.preventDefault();
      handleButtonClick(section);
    });
  }
}

scrollAnimation();
