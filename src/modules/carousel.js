// carousel.js - Fixed version
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function initProjectsCarousel() {
  const carouselContainer = document.querySelector('.projects__carousel');
  
  if (!carouselContainer) {
    console.warn('Projects carousel container not found');
    return;
  }

  const swiper = new Swiper('.projects__carousel', {
    modules: [Navigation, Pagination, Autoplay],
    
    centeredSlides: false,
    slidesPerGroup: 1,
    
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 70,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    
    loop: false, 
    speed: 600,
    
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    
    watchOverflow: true,
  });
  
  return swiper;
}

initProjectsCarousel();


export { initProjectsCarousel };