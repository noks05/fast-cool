(() => {
  const burgerMenu = document.querySelector('.burger-menu');
  const burgerMenuLink = document.querySelectorAll('.burger-menu__link');
  const btnBurgerActive = document.querySelectorAll('.nav__burger-btn-active');
  const btnBurgerClose = document.querySelector('.nav__burger-btn-close');
  const bgFixed = document.querySelector('.bg-fixed');
  const innerWidth = window.innerWidth
  const innerWidthWithScroll = document.documentElement.clientWidth
  const scrollWidth = innerWidth - innerWidthWithScroll

  btnBurgerActive.forEach(el => el.addEventListener('click', openBurgerMenu))
  btnBurgerClose.addEventListener('click', closeBurgerMenu)
  burgerMenuLink.forEach(it => it.addEventListener('click', closeBurgerMenu))

  function openBurgerMenu() {
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = scrollWidth + 'px'
    bgFixed.style.backgroundPositionX = '51.5%'

    burgerMenu.classList.remove('fadeOut')
    burgerMenu.firstElementChild.classList.remove('fadeOutRight')
    burgerMenu.classList.add('fadeIn')
    burgerMenu.firstElementChild.classList.add('fadeInRight')

    burgerMenu.classList.add('active')
  }
  function closeBurgerMenu() {
    document.body.style.overflow = 'initial'
    document.body.style.paddingRight = '0'
    bgFixed.style.backgroundPositionX = '50%'

    burgerMenu.classList.remove('fadeIn')
    burgerMenu.firstElementChild.classList.remove('fadeInRight')
    burgerMenu.classList.add('fadeOut')
    burgerMenu.firstElementChild.classList.add('fadeOutRight')

    setTimeout(() => {
      burgerMenu.classList.remove('active')
    }, 400)
  }


})()
