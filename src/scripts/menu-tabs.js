(() => {

  const tabs = document.querySelectorAll('.menu__tab-btn')
  const contents = document.querySelectorAll('.menu__content-list')

  tabs.forEach(el => el.addEventListener('click', (e) => {
    tabs.forEach(el => el.classList.remove('tab-active'))
    contents.forEach(el => el.classList.remove('content-active'))

    e.currentTarget.classList.add('tab-active')
    const curContent = document.getElementById(e.target.dataset.tab)
    curContent.classList.add('content-active')
  }))

  document.querySelector('.menu__tab-btn').click()
})()
