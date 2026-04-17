const repairs = [
  { id: 1, client: "Anna", device: "laptop", status: "nowe" },
  { id: 2, client: "Piotr", device: "telefon", status: "w trakcie" },
  { id: 3, client: "Ola", device: "tablet", status: "zakończone" }
];

// 1. Znajdź zgłoszenie o konkretnym ID
const targetId = 2;

const foundRepair = repairs.find(repair => repair.id === targetId);

// 2. Aktualizacja statusu (niemutacyjnie, map + spread)
const updatedRepairs = repairs.map(repair => 
  repair.id === targetId
    ? { ...repair, status: "zakończone" }
    : repair
);

// 3. Liczenie zgłoszeń "w trakcie"
const inProgressCount = repairs.filter(
  repair => repair.status === "w trakcie"
).length;

// 4. Wyniki
console.log("📌 Oryginalna tablica:");
console.log(repairs);

console.log("\n🔄 Zaktualizowana tablica:");
console.log(updatedRepairs);

console.log("\n🔍 Znalezione zgłoszenie:");
console.log(foundRepair);

console.log("\n⏳ Liczba zgłoszeń 'w trakcie':");
console.log(inProgressCount);
