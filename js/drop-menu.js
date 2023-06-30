let dropMenuContainer = document.getElementById('dropMenuContainer')
let dropMenu = document.getElementById('dropMenu')
let menuButton = document.getElementById('btnMenu')
let closeButton = document.querySelector('#btnClose')

menuButton.addEventListener('click', function () {
  dropMenu.classList.remove('drop-menu-closed')
  dropMenu.classList.add('drop-menu-open')
  dropMenuContainer.classList.add('drop-menu-container-show')
  dropMenuContainer.classList.remove('drop-menu-container-hide')
})

closeButton.addEventListener('click', function () {
  dropMenu.classList.remove('drop-menu-open')
  dropMenu.classList.add('drop-menu-closed')
  dropMenuContainer.classList.add('drop-menu-container-hide')
  dropMenuContainer.classList.remove('drop-menu-container-show')
})