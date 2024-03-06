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
  }
})()
