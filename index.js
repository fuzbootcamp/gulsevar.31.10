let body = document.body
function lightMode() {
  body.classList.add('light')
  body.classList.remove('dark')
}

function darkMode() {
  body.classList.add('dark')
  body.classList.remove('light')
}
let box = document.querySelector('.box')

function boxChanger() {
  box.classList.toggle('box2')
}