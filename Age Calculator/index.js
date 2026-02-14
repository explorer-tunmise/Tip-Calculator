// Selecting elements in DOM
const birthDate = document.getElementById("birthdate");
let ageResult = document.getElementById("age-result");

// Getting current year
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1; // Months are zero-based, so we add 1 to get the correct month number
let currentDay = new Date().getDate();

birthDate.addEventListener("change", () => {

    // Obtaining all the needed values from the user's entry
  let dateInput = birthDate.value; //Getting the date selected by users
  let dateObject = new Date(dateInput); //converting the input to date object so that date methods can be used on it
  let birthYear = dateObject.getFullYear(); //get the year as a separate entity
  let birthMonth = dateObject.getMonth() + 1; //get the month as a separate entity. Month is zero-indexed, hence the +1
  let birthDay = dateObject.getDate(); //get the day as a separate entity

    // Logic to calculate the exact age
    if(currentMonth > birthMonth || (currentMonth === birthMonth && currentDay >= birthDay)) {
        // If the current month is greater than the birth month, or if it's the same month and the current day is greater than or equal to the birth day, then the user has already had their birthday this year
        age = currentYear - birthYear;
    } else {
        // Otherwise, the user has not had their birthday yet this year
        age = currentYear - birthYear - 1;
    }

    ageResult.innerText = `Your age is: ${age}`;
});
