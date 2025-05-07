var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 15,
    stretch: 0,
    depth: 300,
    modifier: 1,
  },
  loop: true,
});

var swiperSlides = document.querySelectorAll('.swiper-slide');

swiperSlides.forEach(function(slide) {
  slide.addEventListener('click', function() {
    var link = this.querySelector('a');
    if (link) {
      window.location.href = link.href;
    }
  });
});
