// let data = fetch("https://fakeapi.net/products");
// console.log(data);

// fetch("https://fakeapi.net/products")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//  // async function
// async function hello() {
//   return "Hello world";
// }
// hello().then((res) => {
//   console.log(res);
// });

// async function fetchData() {
//   try {
//     let response = await fetch("https://fakeapi.net/products");
//     let data = console.log(response.json());
//     console.log(data);
//   } catch (error) {
//     console.log("Error while fetchinf data");
//   }
// }
// fetchData();

const getData = () => {
  return new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10);
    console.log("Generated random: ", num);
    if (num % 2 === 0) {
      resolve("You're accepted because of even number: " + num);
    } else {
      reject("You're rejected because of odd number: " + num);
    }
  },5000);
};

getData()
  .then((successmsg) => {
    console.log(successmsg);
  })
  .catch((errmsg) => {
    console.log(errmsg);
  });
