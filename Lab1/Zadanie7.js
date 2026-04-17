const repairs = [
  { id: 1, client: "Anna", device: "laptop", status: "nowe" },
  { id: 2, client: "Piotr", device: "telefon", status: "w trakcie" },
  { id: 3, client: "Ola", device: "tablet", status: "zakończone" }
];

const targetedId = repairs.find(client => client.id === 2);
console.log(targetedId);

const updatedrepairs = repairs.map(client => client.id === 2 ? { ...client, status: "Zakończone"} : client);
console.log(updatedrepairs);

const countWTrakcie = repairs.filter(repair => repair.status === "w trakcie").length;


console.log(countWTrakcie);

console.log(repairs);
console.log(updatedrepairs);
