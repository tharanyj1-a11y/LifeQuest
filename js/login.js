const form = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorMsg = document.getElementById("error-message");
const successMsg = document.getElementById("success-message");
const togglePassword = document.getElementById("togglePassword");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  errorMsg.textContent = "";
  successMsg.textContent = "";

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  const savedEmail = localStorage.getItem("userEmail");
  const savedPassword = localStorage.getItem("userPassword");

  if (!validateEmail(emailValue)) {
    errorMsg.textContent = "Enter a valid email.";
    return;
  }

  if (passwordValue.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters.";
    return;
  }

  if (emailValue === savedEmail && passwordValue === savedPassword) {
    successMsg.textContent = "Login successful! Redirecting...";
    
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1500);

  } else {
    errorMsg.textContent = "Incorrect email or password.";
  }
});

function validateEmail(email) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return pattern.test(email);
}

togglePassword.addEventListener("click", function() {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.textContent = "🙈";
  } else {
    password.type = "password";
    togglePassword.textContent = "👁️";
  }
});
