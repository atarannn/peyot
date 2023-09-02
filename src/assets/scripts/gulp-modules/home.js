import screen1 from './home/home-section-1-video';
import screen2 from './home/home-section-2-text-animation';
import screen3 from './home/home-section-3-card-animation';
import screen4 from './home/home-section-4-panorama';
import screen5 from './home/home-section-5-text-animation';
import screen5Slider from './home/home-section-5-slider';
import screen6 from './home/home-section-6-text-animation';
import galleryAnimation from './home/home-section-7-slider';
import './home/home-animation';

function homeInit() {
  screen1();
  screen2();
  screen3();
  screen4();

  screen5();
  screen5Slider();

  screen6();
  galleryAnimation();
}

homeInit();
