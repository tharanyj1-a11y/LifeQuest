// DOM SELECTION
const cards = document.querySelectorAll(".card");

// HOVER EFFECT
cards.forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
  });
});

// CLICK EVENT (LEVEL SYSTEM)
const levelDisplay = document.getElementById("level-display");

let level = 1;

document.addEventListener("click", function(e) {
  if (e.target.tagName === "BUTTON") {
    level++;
    if (levelDisplay) {
      levelDisplay.textContent = "Level " + level;
    }
  }
});

// KEYBOARD EVENT
document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    console.log("Enter key pressed");
  }
});

// DYNAMIC ELEMENT CREATION (TASK LIST)
const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");

if (taskInput && taskList) {
  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const li = document.createElement("li");
    li.textContent = taskInput.value;

    taskList.appendChild(li);
    taskInput.value = "";
  });
}

// ANIMATION (AUTO MESSAGE)
const welcome = document.createElement("p");
welcome.textContent = "Welcome to LifeQuest!";
document.body.prepend(welcome);

setTimeout(() => {
  welcome.style.opacity = "0";
}, 3000);
