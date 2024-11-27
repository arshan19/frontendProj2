const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");
const form = document.getElementById("myForm");

emailInput.addEventListener("input", () => {
    const emailValue = emailInput.value;
    if (emailValue.length > 3 && emailValue.includes("@") && emailValue.includes(".")) {
        emailError.textContent = "Valid email";
        emailError.classList.add("valid");
        emailError.classList.remove("invalid");
    } else {
        emailError.textContent = "Make sure email is more than 3 characters and contains '@' and '.'";
        emailError.classList.add("invalid");
        emailError.classList.remove("valid");
    }
    checkFormValidity(); // Trigger the check on every input change
});

passwordInput.addEventListener("input", () => {
    const passwordValue = passwordInput.value;
    if (passwordValue.length >= 8) {
        passwordError.textContent = "Password is valid";
        passwordError.classList.add("valid");
        passwordError.classList.remove("invalid");
    } else {
        passwordError.textContent = "Password must be more than 8 characters.";
        passwordError.classList.add("invalid");
        passwordError.classList.remove("valid");
    }
    checkFormValidity(); // Trigger the check on every input change
});

function checkFormValidity() {
    const emailValid = emailError.classList.contains("valid");
    const passwordValid = passwordError.classList.contains("valid");

    if (emailValid && passwordValid) {
        successMessage.style.display = "block";
    } else {
        successMessage.style.display = "none";
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    if (emailValue.length > 3 && emailValue.includes("@") && emailValue.includes(".")) 
        {
            alert("Successful Signup!");

            emailInput.value = "";
            passwordInput.value = "";
            emailError.textContent = "";
            passwordError.textContent = "";
            successMessage.style.display = "none"; // Hide success message after submission
        }
    else
    {
            alert("Signup failed. Please fix the errors and try again.");
    }
    
});