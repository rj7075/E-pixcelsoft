document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form fields
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var phoneNumber = document.getElementById("phoneNumber");
    var password = document.getElementById("password");

    // Validate each field
    var isValid = true;

    // First Name validation
    if (firstName.value.trim() === "") {
      showError(firstName, "First name is required");
      isValid = false;
    } else {
      clearError(firstName);
    }

    // Last Name validation
    if (lastName.value.trim() === "") {
      showError(lastName, "Last name is required");
      isValid = false;
    } else {
      clearError(lastName);
    }

    // Email validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value.trim())) {
      showError(email, "Enter a valid email address");
      isValid = false;
    } else {
      clearError(email);
    }

    // Phone Number validation
    var phonePattern = /^\d{10}$/; // Simple 10 digit phone number check
    if (!phonePattern.test(phoneNumber.value.trim())) {
      showError(phoneNumber, "Enter a valid 10-digit phone number");
      isValid = false;
    } else {
      clearError(phoneNumber);
    }

    // Password validation
    if (password.value.trim().length < 8) {
      showError(password, "Password must be at least 8 characters long");
      isValid = false;
    } else {
      clearError(password);
    }

    // If form is valid, submit it
    if (isValid) {
      alert("Form Submitted Successfully!");
      // Optionally, you can use event.target.submit() to submit the form
    }
  });

function showError(input, message) {
  var formGroup = input.parentElement;
  var errorMessage = formGroup.querySelector(".error-message");
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
  input.style.borderColor = "red";
}

function clearError(input) {
  var formGroup = input.parentElement;
  var errorMessage = formGroup.querySelector(".error-message");
  errorMessage.style.display = "none";
  input.style.borderColor = "#ddd";
}
