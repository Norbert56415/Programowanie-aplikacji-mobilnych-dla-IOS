let todos = [
  { id: 1, title: "Oddać projekt", done: false },
  { id: 2, title: "Przeczytać rozdział", done: true },
  { id: 3, title: "Przygotować prezentację", done: false }
];

function addTask(title) {
    const newTodo = {
        id: todos.length + 1,
        title: title,
        done: false
    };
    newTodos = [ ...todos, newTodo];
}
addTask("oddać zadanie na laby IOS");
console.log(newTodos);

function markDone(title) {
    newTodos = newTodos.map(todo => todo.title === title ? { ...todo, done: true} : todo );
    }

markDone("oddać zadanie na laby IOS");
console.log(newTodos);

function getUnDone() {
    const unDone = newTodos.filter(todo => todo.done === false);
    console.log(unDone);
}
getUnDone();
