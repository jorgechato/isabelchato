import Swiper from 'swiper/bundle';

let swiper = null;

export function initSlider() {
  // Clean up existing swiper instance
  if (swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }

  const swiperContainer = document.querySelector('.mySwiper');
  if (!swiperContainer)
    return;

  swiper = new Swiper('.mySwiper', {
    cssMode: true,
    lazy: true,
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });
}

// Initialize on first load
document.addEventListener('DOMContentLoaded', initSlider);

// Re-initialize after view transitions
document.addEventListener('astro:page-load', initSlider);

// Cleanup before navigation
document.addEventListener('astro:before-preparation', () => {
  if (swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
});
