// Selecting elements in DOM
let birthDate = document.getElementById("birthdate");
let ageResult = document.getElementById("age-Result");

console.log(birthDate);

function globalWindow () {
    return this;
}

console.log(globalWindow());
