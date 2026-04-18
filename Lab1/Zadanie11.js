const tripCosts = [
  { label: "nocleg", amount: 420, paidBy: "Anna" },
  { label: "paliwo", amount: 260, paidBy: "Piotr" },
  { label: "jedzenie", amount: 180, paidBy: "Anna" },
  { label: "bilety", amount: 140, paidBy: "Ola" }
];

const totalCost = tripCosts.reduce((sum, item) => sum + item.amount, 0);
console.log(totalCost);

const perPerson = {};

for (const item of tripCosts) {
    if (!perPerson[item.paidBy]) {
        perPerson[item.paidBy] = 0;
    }
    perPerson[item.paidBy] += item.amount;
}

console.log(perPerson);

let maxName = "";
let maxAmount = 0;
for (const person in perPerson) {
        if (perPerson[person] > maxAmount) {
            maxAmount = perPerson[person];
            maxName = person;
        }
}
console.log(`${maxName} zapłacił/a najwięcej : ${maxAmount}`);


console.log('\nRaport kosztów');
for (const person in perPerson) {
    console.log(`${person} zapłacił/a: ${perPerson[person]}`);
};
