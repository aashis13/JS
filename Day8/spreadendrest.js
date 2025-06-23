function namerr(...yup) {
  yup.forEach((value) => {
    console.log(value);
  });
}
namerr("yoooo", 69, true);

function sum(...num) {
  let result = 0;
  num.forEach((value) => {
    result += value;
  });
  console.log(result);
}
sum(1, 2, 3, 4, 5, 6);

// higher order function

