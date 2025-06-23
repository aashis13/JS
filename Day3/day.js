let time = parseFloat(prompt("Enter time in 24 hrs format:"));
let day = prompt("Enter day of the week (1-7): ");
if (time >= 0 && time < 24) {
  if (time >= 0 && time < 12) {
    console.log("Good Morning");
  } else if (time >= 12 && time < 16) {
    console.log("Good Afternoon");
  } else if (time >= 16 && time < 18) {
    console.log("Good Evening");
  } else if (time >= 18 && time < 24) {
    console.log("Good night");
  }
} else {
  alert("Invalid time");
}
switch (day) {
  case "1":
    console.log("Sunday");
    break;
  case "2":
    console.log("Monday");
    break;
  case "3":
    console.log("tuesday");
    break;
  case "4":
    console.log("wednesday");
    break;
  case "5":
    console.log("thursday");
    break;
  case "6":
    console.log("Friday");
    break;
  case "7":
    console.log("saturday");
    break;
  default:
    console.log("Invalid day");
}
