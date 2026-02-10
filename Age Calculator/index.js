// Selecting elements in DOM
const birthDate = document.getElementById("birthdate");
let ageResult = document.getElementById("age-result");

// Getting current year
let currentYear = new Date().getFullYear();


birthDate.addEventListener("change", () => {
 let dateInput = birthDate.value;
 let time = new Date(dateInput);
 let birthYear = time.getFullYear();
 let age = currentYear - birthYear;
 console.log(age);
 ageResult.innerText = `Your age is: ${age}`;
});
