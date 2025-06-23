let arr = [];
let arr2 = new Array();

// insert element to an array
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push("Hello!");

console.log(arr);

// pop element from an array
arr.pop();
console.log(arr);

// remove first element from an array
arr.shift();
console.log(arr);

//add element to start
arr.unshift("Hi!!");
console.log(arr);

//check if element exists
console.log(arr.includes("Hi"));

// get index of an element
console.log(arr.indexOf(3));

//get length of a array
console.log(arr.length);

// loop through element of an array
for (let i of arr) {
  console.log(i);
}

// task

let new_arr = [1, 2, 3, 4, 5];
let reverse = [];
for (let i = new_arr.length - 1; i >= 0; i--) {
  reverse.push(new_arr[i]);
}
console.log(reverse);
