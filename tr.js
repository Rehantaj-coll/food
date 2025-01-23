// Modal and Login/Signup Logic
const loginLink = document.getElementById('loginLink');
const signupLink = document.getElementById('signupLink');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');
const modalTitle = document.getElementById('modal-title');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Open login form
loginLink.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalTitle.textContent = 'Login';
    signupForm.style.display = 'none';
});

// Open signup form
signupLink.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalTitle.textContent = 'Sign Up';
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Simulate form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login Successful');
    modal.style.display = 'none';
});

signupForm.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Account Created Successfully');
    modal.style.display = 'none';
});
