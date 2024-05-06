let burger = document.querySelector('.header-top__burger')
let slider = document.querySelector('.slider')
let wrapper = document.querySelector('.wrapper')
let overlay = document.querySelector('.overlay-tablet')

let xl = window.matchMedia('(max-width: 1439px)')
let l = window.matchMedia('(min-width: 768px)' && '(max-width: 1439px)')
let xxl = window.matchMedia('(min-width: 1440px)')
// let m = window.matchMedia( "(max-width: 767px)" );

if (xl.matches) {
  burger.addEventListener('click', function (evt) {
    if (l.matches) {
      overlay.style.display = 'block'
      evt.preventDefault()
      evt.stopPropagation()

      slider.style.display = 'block'
    }
  })

  document.addEventListener('click', function (evt) {
    if (!slider.contains(evt.target)) {
      // slider.style.animationName = 'move-close-tablet';
      overlay.style.display = 'none'
      slider.style.display = 'none'
    }
  })
}

//swiper

// if (m.matches) {
// const swiper = new Swiper('.swiper', {
//     // // Optional parameters

//     slidesPerView: 'auto',

//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   })
// };

let logosButton = document.querySelector('.logos-open')
let arrow = document.querySelector('.arrow-open')

let logosClose = document.querySelectorAll('.logo-for-desktop')
let logosCloseToo = document.querySelectorAll('.logo-not-for-tablet')

logosButton.addEventListener('click', function (evt) {
  evt.preventDefault()

  arrow.src = 'img/logo/ic/expand-1.png'
  for (let i of logosCloseToo) {
    i.style.display = 'block'
  }

  if (xxl.matches) {
    for (let l of logosClose) {
      l.style.display = 'block'
    }
  }

  logosButton.textContent = 'Скрыть'
  if (logosButton.textContent === 'Скрыть') {
    logosButton.addEventListener('click', function (evt) {
      evt.preventDefault()

      arrow.src = 'img/logo/ic/expand.png'

      if (xxl.matches) {
        for (let l of logosClose) {
          l.style.display = 'none'
        }
      }
      if (l.matches) {
        for (let i of logosCloseToo) {
          i.style.display = 'none'
        }
      }
      logosButton.textContent = 'Показать всё'
    })
  }
})
