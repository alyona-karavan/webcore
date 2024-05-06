let m = window.matchMedia('(max-width: 767px)')

if (m.matches) {
  const swiper = new Swiper('.swiper', {
    // // Optional parameters

    slidesPerView: 'auto',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}
