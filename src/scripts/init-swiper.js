(() => {
  const swiper = new Swiper('.swiper-gallery', {
    slidesPerView: 'auto',
    loop: true,
    speed: 400,
    spaceBetween: 5,
    autoplay: {
      delay: 5000
    }
  });
})()
