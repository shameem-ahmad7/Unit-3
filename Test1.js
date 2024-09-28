document.getElementById("form1").onsubmit = function getFormvalue(event) {
    event.preventDefault(); // Prevent the form from submitting and page reloading
    
    const fname = document.getElementById('fname').value; // Get first name
    const lname = document.getElementById('lname').value; // Get last name
    
    const alertMessage = `${fname} ${lname}`; // Create the alert message
    alert(alertMessage); // Show the alert
    // alert("Hello"); // Additional alert
    // console.log(alertMessage)
};