const user = {
  firstName: "Jan",
  lastName: "Kowalski",
  city: "Katowice",
  age: 21,
  fieldOfStudy: "informatyka",
    hobby: "Granie w gry komputerowe"

};
console.log(user.firstName, user.lastName);
console.log(`studiuję w mieście ${user.city}, na kierunku ${user.fieldOfStudy}`);
if(user.age > 18){
    console.log('użytkownik pełnoletni');
}
else {
    console.log('użytkownik niepełnoleti')
}
console.log(`hobby użytkownika to ${user.hobby}`)
