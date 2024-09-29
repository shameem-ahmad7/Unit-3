document.getElementById('formData').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailWarning = document.getElementById('emailWarning');
    const passwordWarning = document.getElementById('passwordWarning');
    const successWarning= document.getElementById('successWarning')


    // Reset warnings
    emailWarning.textContent = '';
    passwordWarning.textContent = '';

    let valid = true;

    // Email validation
    if (email.length < 3 || !email.includes('@') || !email.includes('.')) {
        emailWarning.textContent = "Make sure email is more than 3 characters and has @ and a .";
   
    }

    // Password validation
    if (password.length <= 8) {
        passwordWarning.textContent = "Make sure password is more than 8 characters.";
    }

    // If valid, you can submit the form or perform any other action
    else {
        // You can submit the form or do something else here
        // alert("Form is valid and ready for submission!");
        successWarning.textContent="Submitted Successfully"
    }
    document.getElementById('email').value="";
    document.getElementById('password').value="";
});
