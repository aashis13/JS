/* assignment: write a program to take a letter A,B,C,D,F and print the grade description using switch case:
A Excellebt
B Good
C Average
D Poor
F Fail
Other Invalid
*/

//switch case
let grade = "C";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  case "D":
    console.log("Poor");
    break;
  case "F":
    console.log("Fail");
    break;
  default:
    console.log("Invalid grade");
}
