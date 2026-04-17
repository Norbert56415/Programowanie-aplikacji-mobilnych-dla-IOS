const tasks = ["zajęcia", "zakupy", "trening"];

function createDayPlan(name, tasks) {
  tasks = tasks || ["Nie masz zadań na dziś pora na csa"];

  const taskListNumered = tasks
    .map((task, index) => `${index + 1}. ${task}`)
    .join("\n");

  const count = tasks.length;

  return `
${name} to Twój plan dnia!
Liczba Zadań: ${count}
${taskListNumered}
`;
}

console.log(createDayPlan("Jan", tasks));
console.log(createDayPlan("Anastazja"));
