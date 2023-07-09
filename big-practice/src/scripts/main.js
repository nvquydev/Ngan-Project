import { App } from './app'

// Sure that scripts called after DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  const myApp = new App()

  // Start the app
  myApp.startApp()
})
document.querySelector('.modal-customer').addEventListener('submit', function (event) {
  event.preventDefault() // Ngăn chặn form submit

  // Kiểm tra và hiển thị thông báo lỗi cho trường Customer Name
  var nameInput = document.getElementById('name')
  var nameError = document.getElementById('name-error')
  var nameRegex = /^[a-zA-Z\s]{20,50}$/
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'The customer name is required'
  } else if (!nameInput.value.match(nameRegex)) {
    nameError.textContent = 'Please enter a valid customer name.'
  } else {
    companyError.textContent = ''
  }


  // Kiểm tra và hiển thị thông báo lỗi cho trường Company
  var companyInput = document.getElementById('company')
  var companyError = document.getElementById('company-error')
  if (companyInput.value.trim() === '') {
    companyError.textContent = 'Please enter a valid company name.'
  } else {
    companyError.textContent = ''
  }
  // validate another fields

  // Tiếp tục kiểm tra và hiển thị thông báo lỗi cho các trường khác...

  // Nếu không có lỗi, tiến hành gửi form
  if (!nameError.textContent && !companyError.textContent) {
    event.target.submit()
  }
})
