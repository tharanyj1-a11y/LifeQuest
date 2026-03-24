// JOURNAL
const journalForm = document.getElementById("journal-form");
const journalList = document.getElementById("journal-list");

if (journalForm) {
  journalForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const date = document.getElementById("entry-date").value;
    const text = document.getElementById("journal-entry").value;

    const li = document.createElement("li");
    li.textContent = date + " - " + text;

    journalList.appendChild(li);
    journalForm.reset();
  });
}

// TASK REMOVE
const taskList = document.getElementById("task-list");

if (taskList) {
  document.getElementById("task-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const taskInput = document.getElementById("task");

    const li = document.createElement("li");
    li.textContent = taskInput.value;

    const btn = document.createElement("button");
    btn.textContent = "Remove";

    btn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(btn);
    taskList.appendChild(li);

    taskInput.value = "";
  });
}

// WELLNESS
const wellnessForm = document.getElementById("wellness-form");
const wellnessList = document.getElementById("wellness-list");

if (wellnessForm) {
  wellnessForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const water = document.getElementById("water").value;
    const sleep = document.getElementById("sleep").value;

    const li = document.createElement("li");
    li.textContent = "Water: " + water + " | Sleep: " + sleep;

    wellnessList.appendChild(li);
    wellnessForm.reset();
  });
}

// FINANCE
const financeForm = document.getElementById("finance-form");
const financeList = document.getElementById("finance-list");

if (financeForm) {
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
