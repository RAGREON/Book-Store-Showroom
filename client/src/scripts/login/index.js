const container = document.querySelector('#container')
const registerBtn = document.querySelector('#register')
const loginBtn = document.querySelector('#login')

registerBtn.addEventListener('click', () => {
  container.classList.add('active')
})

loginBtn.addEventListener('click', () => {
  console.log('login button pressed')
  container.classList.remove('active')
})