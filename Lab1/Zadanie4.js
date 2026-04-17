const hasLaptop = true;
const hasCharger = false;
const hasNotebook = true;
const dayType = "laboratorium";
const długaprzerwa = true

let isReady;

if (hasLaptop && hasNotebook) {
  isReady = true;
} else {
  isReady = false;
}


const status = isReady ? "Gotowy na zajęcia" : "Niegotowy na zajęcia";


console.log(status);


!hasCharger && console.log("Nie masz ładowarki!");


if (dayType === "laboratorium") {
  console.log("Dziś laboratorium – laptop wymagany.");
} else {
  console.log("Dziś wykład – wystarczy notatnik.");
}

if (długaprzerwa === true) {
    console.log('Weź jeszcze myszkę do grania w csa na przerwie. ;D');
}
else (console.log('Miłego dnia!'));
