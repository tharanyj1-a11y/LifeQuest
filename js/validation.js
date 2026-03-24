// EMAIL VALIDATION
function validateEmail(email) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return pattern.test(email);
}

// LOGIN FORM
const loginForm = document.querySelector("form");

if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if (email && password) {
      if (!validateEmail(email.value)) {
        alert("Enter a valid email.");
        e.preventDefault();
        return;
      }

      if (password.value.length < 6) {
        alert("Password must be at least 6 characters.");
        e.preventDefault();
        return;
      }
    }
  });
}

// CONTACT FORM
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");

    if (!name.value || !email.value) {
      alert("All fields are required.");
      e.preventDefault();
    }
  });
}
