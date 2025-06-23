// function  - resusable blovk og code which is used to perform specific task

// baso=ic function with no parameter and return value4

// console.log(x);
// var x = 5; // give undefined
// let x = 5; // give error

function greet() {
  console.log("Hello!");
}

// functipn with parameter
function greet_user(username, sirname) {
  console.log("Hello! " + username + " " + sirname);
}
greet_user("Jacob", "Stacks");

// function with return value
function return_result(a, b) {
  return a + b;
}

let result = return_result("Hi ", "Hello");
console.log(result);

function basic_calculator(a, b, operator) {
  switch (operator) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(a / b);
      break;
    default:
      console.log("Invalid operator");
  }
}
basic_calculator(1, 0, "/");

// anonymous function
let result_op = (a, b) => {
  console.log(result_op(2, 3));
};

say_hello();
function say_hello() {
  console.log("Hello!");
}
