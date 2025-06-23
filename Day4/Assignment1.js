let stdname = new Array();
let grade = new Array();
let adding;
do {
  addStudent(
    prompt("Student Name (Mandatory): "),
    parseInt(prompt("Grade (0-100): "))
  );
  adding = prompt("Add student? (Y/N): ");
} while (adding.toLowerCase() == "y");

function addStudent(stdname1, grade1) {
  if (stdname1.trim() == "") {
    console.log("We have invalidation of the name");
  } else if (grade1 < 0 || grade1 > 100) {
    console.log("We have invalid grades");
  } else {
    stdname.push(stdname1);
    grade.push(grade1);
  }
}
let avg = 0;
function average() {
  for (i = 0; i < grade.length; i++) {
    avg += grade[i];
  }
  avg = avg / grade.length;
  avg = avg.toFixed(2);
  console.log("The average of the Grades is: " + avg);
  determineclassperformace(avg);
}
average();
function determineclassperformace(avg1) {
  console.log("Average grade of the class: ");
  if (avg1 >= 90) console.log("A");
  else if (avg1 >= 80) console.log("B");
  else if (avg1 >= 70) console.log("C");
  else if (avg1 >= 60) console.log("D");
  else if (avg1 < 60) console.log("F");
}
