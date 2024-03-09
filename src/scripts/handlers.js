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
      navFixed.classList.add('fadeInUp')

    } else if (!timeNav && !navFixedDisable) {
      navFixedDisable = true

      navFixed.classList.remove('fadeInUp')
      navFixed.classList.add('fadeOutUp')
      setTimeout(() => {
        nav.classList.remove('disabled')
        nav.classList.add('fadeIn')
      }, 300)
    }
  }

  window.addEventListener('scroll', enableNavFixed)

})()
