const contacts = [
  { name: "Anna Nowak", phone: "500-100-200", city: "Katowice", favorite: true },
  { name: "Piotr Lis", phone: "501-300-700", city: "Sosnowiec", favorite: false },
  { name: "Ola Marek", phone: "502-400-900", city: "Katowice", favorite: true }
];
function getByCity(city) {
    return contacts.filter(contact => contact.city === city);
}
function getByFavorite() {
    return contacts.filter(contact => contact.favorite === true);
}
function format(list) {
    return list.map(contact => `${contact.name} - ${contact.phone}`);
}
console.log(format(getByFavorite()));
console.log(format(getByCity("Sosnowiec")));
