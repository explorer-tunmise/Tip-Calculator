// Selecting elements in DOM
const birthDate = document.getElementById("birthdate");
let ageResult = document.getElementById("age-Result");

birthDate.addEventListener("change", () => {
 let dateInput = birthDate.value;
 let time = new Date(dateInput);
 let birthYear = time.getFullYear();
 console.log(birthYear);
});

console.log(birthDate);
