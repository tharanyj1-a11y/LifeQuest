// SIGN UP (SAVE USER)
const signupForm = document.getElementById("signup-form");

if (signupForm) {
  signupForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirm = document.getElementById("confirm-password").value;

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Account created!");
    window.location.href = "login.html";
  });
}

// LOGIN
const loginForm = document.getElementById("login-form");

if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {
      localStorage.setItem("loggedInUser", email);
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid login credentials");
    }
  });
}

// WELCOME MESSAGE
const welcomeUser = document.getElementById("welcome-user");

if (welcomeUser) {
  const user = localStorage.getItem("loggedInUser");

  if (user) {
    welcomeUser.textContent = "Welcome " + user;
  } else {
    welcomeUser.textContent = "Welcome Guest";
  }
}

// PASSWORD TOGGLE
const toggle = document.getElementById("toggle-password");

if (toggle) {
  toggle.addEventListener("click", function() {
    const pass = document.getElementById("password");

    if (pass.type === "password") {
      pass.type = "text";
      toggle.textContent = "Hide";
    } else {
      pass.type = "password";
      toggle.textContent = "Show";
    }
  });
}
