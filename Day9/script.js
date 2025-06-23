// setTimeOut

// let num = 0;
// function handleTimeout() {
//   console.log("Timeout called");
// }
// setTimeout(handleTimeout, 5000);

//settimeout is asynchronous
// console.log("1");
// console.log("2");
// setTimeout(() => {
//   console.log("Timeout called");
// }, 5000);
// console.log("3");
// console.log("4");

//settimeout interval
// let sum = 0;
// function handleInterval() {}
// let timeoutId = setInterval(() => {
//   console.log(sum++); //console.group(sum++);
// }, 1000);
// // setInterval(handleInterval, 1000);

// setTimeout(() => {
//   clearInterval(timeoutId);
// }, 5000);

// setInterval(() => {
//   console.log(Math.floor(Math.random() * 10));
// }, 1000);

let char = "0123456789ABCDEF";

function generateColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 16);
    color += char[randomNumber];
  }
  return color;
}
function assignColor() {
  let color = generateColor();
  console.log(color);
  document.body.style.backgroundColor = color;
}

let intervalId;
function handleInterval() {
  intervalId = setInterval(assignColor, 1000); //10 also can be used on it.
}
function stopInterval() {
  clearInterval(intervalId);
}
