// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newArr = arr.map((value) => {
//   return value * 2;
// });
// // console.log(newArr);

// /*------------------------------------------------------------------*/

// let str = ["Ram", "Hari", "Shyam", "Rahulk", "Shiva", "Cat"];
// str.map((value, index) => {
//   console.log(index, ": ", value);
// });

// filter function

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let newArr = arr.filter((value, index) => {
  return /*value*/ index % 2 == 0;
});

console.log(newArr);
