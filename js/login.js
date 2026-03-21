const form = document.getElementById("contact-form");
const messageBox = document.getElementById("form-message");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    messageBox.textContent = "Please fill in all fields.";
    messageBox.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    messageBox.textContent = "Enter a valid email address.";
    messageBox.style.color = "red";
    return;
  }

  messageBox.textContent = "Opening your email app...";
  messageBox.style.color = "lightgreen";

  const mailtoLink = `mailto:your@email.com?subject=LifeQuest Feedback from ${name}&body=${message}`;

  window.location.href = mailtoLink;
});
