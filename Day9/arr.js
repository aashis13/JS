let arr = [1,2, [3, 4, [5, [6, [7, [8]]]]]];

function sumofarray(arr) {
  return arr.reduce((sum, value) => {
    if (Array.isArray(value)) {
      return sum + sumofarray(value);
    }
    return sum + value;
  }, 0);
}
const sum = sumofarray(arr);
console.log("The total sum of array inside array is: ", sum);
