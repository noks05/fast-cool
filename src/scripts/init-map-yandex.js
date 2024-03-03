(() => {
  ymaps.ready(init)

  function init() {
    const map = new ymaps.Map('map', {
      center: [55.682838, 37.537047],
      zoom: 14,
      type: 'yandex#map',
    });

    const mark = new ymaps.Placemark(
      [55.682838, 37.537047],
      {
        hintContent: 'г. Москва, ​​​​​​​​​​​​​​Ленинский проспект',
      },
      {
        preset: 'islands#violetIcon',
      }
    )
    map.geoObjects.add(mark);
    map.behaviors.disable('scrollZoom');

    // const mapEl = document.getElementById('map')
    // mapEl.style.height = String(mapEl.parentElement.style.height)
    // mapEl.style.height = 'auto'
    // mapEl.firstElementChild.style.height = '100%'
    // mapEl.firstElementChild.style.maxHeight = '650px'
    // mapEl.firstElementChild.style.width = '100%'

    // const mediaQuery = window.matchMedia('(max-width: 768px)')
    // if (mediaQuery.matches) {
    //   mapEl.style.height = '400px'
    // }
  }
})()
