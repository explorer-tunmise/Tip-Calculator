const day = "sunday";

// switch(day) {
//     case "monday":
//         console.log("Plan course content");
//         console.log("Go to coding meetup");
//         break;
//     case "tuesday":
//         console.log("Prepare theory videos");
//         break;
//     case "wednesday":
//     case "thursday":
//         console.log("Write code examples");
//         break;
//     case "friday":
//         console.log("Record videos");
//     case "saturday":
//     case "sunday":
//         console.log("Enjoy the weekend :D");
//         break;
//     default:
//         console.log("Not a valid day!");
// }

if (day === "monday") {
  console.log("Plan course content");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}

const age = 20;
age >= 18 ? console.log("I can drink wine 🍷") : console.log("I like to drink water");

const calcAge2 = (birthYear) => {

}
