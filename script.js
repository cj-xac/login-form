const form = document.querySelector('.form-container');
const forgotPasswordLink = document.querySelector('.link');

forgotPasswordLink.addEventListener('click', (event) => {
  event.preventDefault();
  alert('A password reset link has been sent to your email address.');
});