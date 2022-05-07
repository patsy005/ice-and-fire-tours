

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
  spaceBetween: 10,
  // effect: "fade",
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// const swiperSlide = document.querySelectorAll(".swiper-slide");

// for (const slide of swiperSlide) {
//   slide.style.width = "60%";
// }
