const shoppingList = [
  { name: "chleb", quantity: 2, urgent: true , price: 3 },
  { name: "mleko", quantity: 1, urgent: false, price: 4 },
  { name: "jajka", quantity: 10, urgent: true , price: 0.50},
  { name: "makaron", quantity: 3, urgent: false , price: 5}
];
console.log('Lista Zakupów');
shoppingList.forEach(item => {
  console.log(`${item.name} ${item.quantity}`);
});

const ur = shoppingList.filter(item => item.urgent);
console.log(ur);

const uppercase = shoppingList.map(item => item.name.toUpperCase());

console.log(uppercase);

console.log(`pozycji pilnych : ${ur.length}`);
// koszt wszystkich zakupów
const cost = shoppingList.reduce((sum, item) => {
  return sum + item.quantity * item.price;
}, 0);

console.log(`koszt wszystkich pozycji z listy to : ${cost} zł`);
