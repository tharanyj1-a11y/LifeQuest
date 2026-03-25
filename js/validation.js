// EMAIL VALIDATION FUNCTION
function validateEmail(email) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return pattern.test(email);
}

// LOGIN VALIDATION
const loginForm = document.getElementById("login-form");

if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!validateEmail(email)) {
      alert("Enter a valid email");
      e.preventDefault();
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      e.preventDefault();
    }
  });
}

// SIGNUP VALIDATION
const signupForm = document.getElementById("signup-form");

if (signupForm) {
  signupForm.addEventListener("submit", function(e) {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    if (!validateEmail(email)) {
      alert("Enter a valid email");
      e.preventDefault();
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      e.preventDefault();
    }
  });
}
