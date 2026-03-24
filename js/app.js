// TASK SYSTEM (FOCUS)
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

if (taskForm && taskList) {
  taskForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const taskInput = document.getElementById("task");

    const li = document.createElement("li");
    li.textContent = taskInput.value;

    const btn = document.createElement("button");
    btn.textContent = " Remove";

    btn.onclick = () => li.remove();

    li.appendChild(btn);
    taskList.appendChild(li);

    taskInput.value = "";
  });
}

// WELLNESS TRACKER
const wellnessForm = document.getElementById("wellness-form");
const wellnessList = document.getElementById("wellness-list");

if (wellnessForm && wellnessList) {
  wellnessForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const water = document.getElementById("water").value;
    const sleep = document.getElementById("sleep").value;

    const li = document.createElement("li");
    li.textContent = `Water: ${water} | Sleep: ${sleep}`;

    wellnessList.appendChild(li);

    wellnessForm.reset();
  });
}

// FINANCE TRACKER
const financeForm = document.getElementById("finance-form");
const financeList = document.getElementById("finance-list");

if (financeForm && financeList) {
  financeForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const month = document.getElementById("month").value;
    const income = document.getElementById("income").value;
    const desc = document.getElementById("expense-desc").value;
    const amount = document.getElementById("amount").value;

    const li = document.createElement("li");
    li.textContent = `${month} | Income: $${income} | ${desc}: $${amount}`;

    financeList.appendChild(li);

    financeForm.reset();
  });
}
