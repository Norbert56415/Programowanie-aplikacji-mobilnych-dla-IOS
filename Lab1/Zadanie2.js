const expenses = [18.5, 42, 9.99, 27, 61.3, 15, 33.5];
const total = expenses.reduce((sum, expenses) => sum + expenses, 0);
console.log(total);

const average = total / expenses.length;
console.log(average);

const max = Math.max(...expenses);

console.log(max); // 61.3

console.log(
    `Raport wydatków
    Ilość wydatków ${expenses.length}
    Suma wydatków ${total} zł
    Średnia wydatków ${average.toFixed(2)} zł
    Największy wydatek ${max} zł
    `
)
