document.addEventListener('DOMContentLoaded', function() {
  const selector = (string) => {
    return document.querySelector(string)
  }

  const selectorAll = (string) => {
    return document.querySelectorAll(string)
  }

  const hamburgerBtn = selector('.hamburger')
  const quickMenuBtn = selector('.quick-menu .menu-toggle-button')
  const overlay = selector('.overlay')

  hamburgerBtn.addEventListener('click', function(e) {
    hamburgerBtn.classList.toggle('is-active')
    document.body.classList.toggle('side-menu--active')
  })

  quickMenuBtn.addEventListener('click', function() {
    document.body.classList.toggle('quick-menu--active')
  })

  overlay.addEventListener('click', function() {
    if (selectorAll('.side-menu--active').length) {
      hamburgerBtn.classList.toggle('is-active')
      document.body.classList.toggle('side-menu--active')
    } else if (selectorAll('.quick-menu--active').length) {
      document.body.classList.toggle('quick-menu--active')
    }
  })
})

