// promises
let myPromises = new Promise((resolve, reject) => {
  let isCakeAvailabe = true;

  if (isCakeAvailabe) {
    resolve("Promise resolve");
  } else {
    reject("Promise rejected");
  }
});
// console.log(myPromises);

myPromises
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  });
