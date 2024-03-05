(() => {
  const swiperGallery = new Swiper('.swiper-gallery', {
    slidesPerView: 'auto',
    loop: true,
    speed: 400,
    spaceBetween: 5,
    autoplay: {
      delay: 5000
    },
    on: {
      click: activeModalGallery,
    }
  });
  const swiperModalGallery = new Swiper('.swiper-modal-gallery', {
    loop: true,
    speed: 600,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const modalGallery = document.querySelector('.swiper-modal-gallery')

  function activeModalGallery(e) {
    const numSlide = Number(e.clickedSlide.ariaLabel.split('/')[0].trim())
    indexSlide = numSlide && numSlide - 1

    modalGallery.classList.add('active')
    swiperModalGallery.slideTo(indexSlide)
  }

  modalGallery.addEventListener('click', (e) => {
    const clickOnImg = e.target.parentElement.classList.contains('swiper-slide')
    const clickBtnPrev = e.target.closest('.swiper-button-prev')
    const clickBtnNext = e.target.closest('.swiper-button-next')

    if (!clickOnImg && !clickBtnPrev && !clickBtnNext) {
      modalGallery.classList.remove('active')
    }
  })
})()
