document.addEventListener('DOMContentLoaded', function() {
  const selector = (string) => {
    return document.querySelector(string)
  }

  const hamburger = selector('.hamburger')
  const overlay = selector('.overlay')

  hamburger.addEventListener('click', function(e) {
    hamburger.classList.toggle('is-active')
    document.body.classList.toggle('menu--active')
  })

  overlay.addEventListener('click', function() {
    hamburger.classList.toggle('is-active')
    document.body.classList.toggle('menu--active')
  })
})

