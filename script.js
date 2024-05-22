function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    const isFullNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isFullNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
        alert('Form submitted successfully!');
        // Here you can write code to submit the form data to the server
    }
}

function validateFullName() {
    const fullName = document.getElementById('fullName').value;
    const errorElement = document.getElementById('fullNameError');
    if (fullName.length < 5) {
        errorElement.textContent = 'Full Name must be at least 5 characters long.';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const errorElement = document.getElementById('emailError');
    if (!email.includes('@')) {
        errorElement.textContent = 'Enter a valid email address.';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validatePhone() {
    const phone = document.getElementById('phone').value;
    const errorElement = document.getElementById('phoneError');
    if (phone.length !== 10 || phone === '1234567890') {
        errorElement.textContent = 'Enter a valid 10-digit phone number.';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const fullName = document.getElementById('fullName').value;
    const errorElement = document.getElementById('passwordError');
    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
        errorElement.textContent = 'Password must be at least 8 characters and cannot be "password" or your name.';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}

function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorElement = document.getElementById('confirmPasswordError');
    if (password !== confirmPassword) {
        errorElement.textContent = 'Passwords do not match.';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}
