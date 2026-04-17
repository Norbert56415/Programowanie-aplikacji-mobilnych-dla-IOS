const cart = [
  { name: "Chleb", price: 4.5, quantity: 2 },
  { name: "Ser", price: 9.9, quantity: 1 },
  { name: "Sok", price: 6.2, quantity: 3 }
];

const discountThreshold = 30;
const discountPercent = 10;

const itemValues = cart.map(
  item => item.price * item.quantity
);
console.log(itemValues);


const itemDescriptions = cart.map(
  item => `${item.quantity} × ${item.name}`
);
console.log(itemDescriptions);

const total = itemValues.reduce((sum, value) => sum + value, 0);


let finaltotal
if (total >= discountThreshold){
    finaltotal = total * ((100 - discountPercent)/100);
} else {
    finaltotal = total;
}

console.log("\nRAPORT KOŃCOWY")
console.log("przed rabatem:");
console.log(total);
console.log("po rabacie");
console.log(finaltotal);
