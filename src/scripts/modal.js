(() => {
  const modal = document.querySelector('.modal');
  const modalBox = document.querySelector('.modal__box');
  const btnActiveModal = document.querySelectorAll('[data-role="btn-active-modal"]');
  const bgFixed = document.querySelector('.bg-fixed');

  modal.addEventListener('click', (event) => closeModal(event))
  btnActiveModal.forEach(it => it.addEventListener('click', (event) => openModal(event)))

  function openModal(e) {
    const uniqClass = e.currentTarget.id

    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = '17px'
    bgFixed.style.right = '17px'

    modal.classList.add('active', uniqClass)

    modal.classList.remove('fadeOut')
    modalBox.classList.remove('scaleOut')
    modal.classList.add('fadeIn')
    modalBox.classList.add('scaleIn')
  }
  function closeModal(e) {
    const target = e.target
    const clickInBox = target.closest('.modal__box')
    const clickInClose = target.closest('.modal__close')
    const clickInOk = target.closest('.modal__ok')

    if (!clickInBox || clickInClose || clickInOk) {
      document.body.style.overflow = 'initial'
      document.body.style.paddingRight = '0'
      bgFixed.style.right = '0'

      modal.classList.remove('fadeIn')
      modalBox.classList.remove('scaleIn')
      modal.classList.add('fadeOut')
      modalBox.classList.add('scaleOut')

      setTimeout(() => {
        modal.className = 'modal'
      }, 400)
    }
  }


})()
