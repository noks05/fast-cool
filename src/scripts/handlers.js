(() => {
  let navFixedDisable = true
  const header = document.querySelector('.header')
  const nav = document.querySelector('.nav-main')
  const navFixed = document.querySelector('.nav-fixed')
  const timeNavFixed = nav.offsetHeight + header.offsetHeight + 30

  function enableNavFixed() {
    const timeNav = window.scrollY > timeNavFixed

    if (timeNav && navFixedDisable) {
      navFixedDisable = false

      nav.classList.add('disabled')
      nav.classList.remove('fadeIn')
      navFixed.classList.remove('fadeOutUp')
      navFixed.classList.add('fadeInDown')

    } else if (!timeNav && !navFixedDisable) {
      navFixedDisable = true

      navFixed.classList.remove('fadeInDown')
      navFixed.classList.add('fadeOutUp')
      setTimeout(() => {
        nav.classList.remove('disabled')
        nav.classList.add('fadeIn')
      }, 300)
    }
  }

  window.addEventListener('scroll', enableNavFixed)

  // ++++++++++++++++++ burger menu ++++++++++++++++++
  let idTimeout = 0
  const btnBurgerActive = document.querySelector('.head__burger-btn')
  const burgerMenu = btnBurgerActive.closest('.header').lastElementChild

  btnBurgerActive.addEventListener('click', (e) => {
    if (idTimeout) return
    const activeClass = burgerMenu.classList.contains('active')

    if (activeClass) {
      closeBurgerMenu()
    } else {
      openBurgerMenu()
    }
  })

  document.querySelectorAll('.burger-menu__link').forEach(el => el.addEventListener('click', closeBurgerMenu))

  function closeBurgerMenu() {
    document.body.style.overflow = 'initial'
    document.body.style.paddingRight = '0'

    btnBurgerActive.classList.remove('active')
    burgerMenu.classList.remove('fade-right-in')
    burgerMenu.classList.add('fade-right-out')

    idTimeout = setTimeout(() => {
      burgerMenu.classList.remove('active')
      idTimeout = 0
    }, 700)
  }
  function openBurgerMenu() {
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = '16px'

    btnBurgerActive.classList.add('active')
    burgerMenu.classList.remove('fade-right-out')
    burgerMenu.classList.add('active', 'fade-right-in')
  }


})()
