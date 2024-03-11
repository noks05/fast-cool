(() => {
  const options = {
    threshold: .1,
  };

  const observer = new IntersectionObserver(onEntry, options);
  const menu = document.querySelector('.menu');
  const advantages = document.querySelector('.advantages');
  const aboutUs = document.querySelector('.about-us');
  const delivery = document.querySelector('.delivery');
  const gallery = document.querySelector('.gallery');
  const contacts = document.querySelector('.contacts');
  observer.observe(menu)
  observer.observe(advantages)
  observer.observe(aboutUs)
  observer.observe(delivery)
  observer.observe(gallery)
  observer.observe(contacts)

  function onEntry(entries) {
    entries.forEach(entry => {
      const target = entry.target

      if (entry.isIntersecting) {
        switch (target.className.split(' ')[0]) {
          case 'menu':
            const menuTitle = target.querySelector('.menu__title span')
            menuTitle.classList.add('fadeInDownSectionTitle')
            break;
          case 'advantages':
            const advantagesElements = getArrayElements(target,
              ['.advantages__title span', '.advantages__list'])
            advantagesElements.forEach((el, i) => {
              if (i === 0) {
                el.classList.add('fadeInDownSectionTitle')
              } else {
                el.classList.add('fadeInDown')
              }
            })
            break;
          case 'about-us':
            const aboutUsElements = getArrayElements(target,
              ['.about-us__img-first', '.about-us__block', '.about-us__img-last'])
            aboutUsElements.forEach(el => el.classList.add('fadeInDown'))
            break;
          case 'delivery':
            const deliveryRight = target.querySelector('.delivery__right-inner')
            deliveryRight.classList.add('fadeInDown')
            break;
          case 'gallery':
            const swiperGallery = target.querySelector('.swiper')
            swiperGallery.classList.add('fadeInDown')
            break;
          case 'contacts':
            const contactsBox = target.querySelector('.contacts__contacts-box')
            contactsBox.classList.add('fadeInDown')
            break;
        }
      }
    });

  };
  function getArrayElements(curElem, classes) {
    return classes.reduce((elements, classElem) => {
      const elem = curElem.querySelector(classElem)
      if (elem) {
        elements.push(elem)
      }
      return elements
    }, [])
  }
})()
