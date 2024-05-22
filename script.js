document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Initialize error flags
    let valid = true;

    // Validate Full Name
    if (fullName.length < 5) {
        valid = false;
        document.getElementById('fullNameError').textContent = 'Full Name must be at least 5 characters long.';
    } else {
        document.getElementById('fullNameError').textContent = '';
    }

    // Validate Email
    if (!email.includes('@')) {
        valid = false;
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Validate Phone Number
    if (phone.length !== 10 || phone === '1234567890') {
        valid = false;
        document.getElementById('phoneError').textContent = 'Enter a valid 10-digit phone number.';
    } else {
        document.getElementById('phoneError').textContent = '';
    }

    // Validate Password
    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
        valid = false;
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters and cannot be "password" or your name.';
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
        valid = false;
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
    } else {
        document.getElementById('confirmPasswordError').textContent = '';
    }

    // If all validations pass, submit the form
    if (valid) {
        alert('Form submitted successfully!');
        // Here you can write code to submit the form data to the server
    }
});
