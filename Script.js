const loginPage = document.getElementById('loginPage');
const portfolioPage = document.getElementById('portfolioPage');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const loginSuccess = document.getElementById('loginSuccess');
const logoutBtn = document.getElementById('logoutBtn');
const logoutMessage = document.getElementById('logoutMessage');
const yearSpan = document.getElementById('year');

yearSpan.textContent = new Date().getFullYear();

const VALID_USERNAME = 'Marc Tinaco';
const VALID_PASSWORD = '102938';

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    loginError.style.display = 'none';
    loginSuccess.style.display = 'block';

    setTimeout(() => {
      loginPage.style.display = 'none';
      portfolioPage.style.display = 'block';
    }, 800);
  } else {
    loginError.style.display = 'block';
    loginSuccess.style.display = 'none';
  }
});

logoutBtn.addEventListener('click', function () {
  portfolioPage.style.display = 'none';
  loginPage.style.display = 'block';
});



