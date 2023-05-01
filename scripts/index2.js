const myForm = document.getElementById('myForm');
const nextBtn = document.querySelector('.btn');

// Add an event listener for when the form is submitted
nextBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Save the form data to localStorage
  localStorage.setItem('name', document.getElementById('name').value);
  localStorage.setItem('email', document.getElementById('email').value);
  localStorage.setItem('number', document.getElementById('phonen').value);

  location.reload();
  window.location.href = 'page2.html';
});


const savedName = localStorage.getItem('name');
const savedEmail = localStorage.getItem('email');
const savedNumber = localStorage.getItem('number');
if (savedName && savedEmail && savedNumber ) {
  document.getElementById('name').value = savedName;
  document.getElementById('email').value = savedEmail;
  document.getElementById('phonen').value =savedNumber;
}