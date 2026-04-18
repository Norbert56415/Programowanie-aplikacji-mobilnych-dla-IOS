const schedule = [
  { day: "poniedziałek", subject: "Programowanie", room: "A12", online: false },
  { day: "wtorek", subject: "Bazy danych", room: "online", online: true },
  { day: "czwartek", subject: "Grafika", room: "B03", online: false },
  { day: "piątek", subject: "UX", room: "online", online: true }
];

function getByDay(day) {
    return schedule.filter(item => item.day === day)
    
}


function format(list) {
    return list.map(item =>
    `Przedmiot :${item.subject} — Klasa: ${item.room} — Forma zajęć: ${item.online ? "online" : "stacjonarne"}`
  );
}

console.log(getByDay("wtorek"));
console.log(format(getByDay("poniedziałek")));
