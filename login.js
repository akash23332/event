const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

// Add event listener for Register button
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
    alert('You are switching to the Registration form. Please fill in your details.');
});

// Add event listener for Login button
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
    alert('You are switching to the Login form. Welcome back!');
});

// Add event listener for the Register form submit
const registerForm = document.querySelector('.form-box.register form');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission for demo purposes
    alert('Registration successful! Welcome to the platform.');
});

// Add event listener for the Login form submit
const loginForm = document.querySelector('.form-box.login form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission for demo purposes
    alert('Login successful! Redirecting you to the dashboard.');
});