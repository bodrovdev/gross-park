import Swiper from 'swiper/bundle';

var init = false;

function catalogueSlider() {
  if (window.innerWidth <= 767) {
    if (!init) {
      init = true;
      var catalogueSlider = new Swiper(".index-catalogue__mobile-slider", {
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        // navigation: {
        //   nextEl: '.inside__slider-arrow--next',
        //   prevEl: '.inside__slider-arrow--prev',
        // },
        // pagination: {
        //   el: ".inside__slider-pagination",
        //   clickable: true,
        // },
      });
    }
  } else if (init) {
    catalogueSlider.destroy();
    init = false;
  }
}
catalogueSlider();
window.addEventListener("resize", catalogueSlider);