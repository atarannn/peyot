export default function screen6() {
  const section6 = document.querySelector('.section-6');
  const textAnimation2 = section6.querySelector('.section-6__text-animation');

// Отримаємо текст з елемента .section-2__text-animation
  const textContent2 = textAnimation2.textContent.trim();

// Видалення існуючого тексту
  textAnimation2.textContent = '';

// Отримаємо рядок з буквами
// Розділити текст на окремі слова
  const words2 = textContent2.split(' ');

// Застосуємо стилі кожному слову, обгорнувши їх у <span>
  words2.forEach((word, index) => {
    const wordSpan = document.createElement('span'); // Спан для кожного слова
    wordSpan.classList.add('wordSpan');

    // Додамо пробіл до всіх слів, крім першого
    if (index > 0) {
      wordSpan.textContent = ' ';
    }

    // Поділить слово на окремі символи
    const letters = word.split('');

    // Застосуємо стилі кожному символу слова, обгорнувши їх у внутрішній спан
    letters.forEach((letter) => {
      const innerSpan = document.createElement('span'); // Внутрішній спан для відображення символу
      innerSpan.textContent = letter;
      wordSpan.appendChild(innerSpan);
    });

    textAnimation2.appendChild(wordSpan);
  });


// Анімація зміни кольору букв по черзі з додатковою затримкою
  gsap.fromTo(
    textAnimation2.querySelectorAll('span > span'),
    {
      color: '#D6D6D6', // Початковий колір букв
      y: '20%' // Початкова позиція по осі Y (зсув на 100% від висоти букви вниз)
    },
    {
      color: '#1D1D1B', // Кінцевий колір букв
      y: '0%', // Кінцева позиція по осі Y (повернення на своє місце)
      scrollTrigger: {
        trigger: section6,
        start: '0% center',
        end: '50% center',
        scrub: 1
      },
      duration: 5, // Тривалість анімації (в секундах)
      stagger: .5, // Час затримки між анімаціями кожної букви
    }
  );


  if(document.documentElement.clientWidth > 1023) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: section6,
          start: '0% center',
          end: '50% center',
          scrub: 2,
        },
      })
      .fromTo('.section-6 img', {y: 250},{ y: 0,  duration: 5 }, '<')
  } else {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: section6,
          start: '0% center',
          end: '50% center',
          scrub: 2,
        },
      })
      .fromTo('.section-6 img', {y: 150},{ y: -50,  duration: 5 }, '<')
  }
}
