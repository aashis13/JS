let loop = {
  firstname: "John",
  lastname: "thedon",
  age: 18,
};
// for (let key in loop) {
//   console.log(key + " : " + loop[key]);
// }
for(i in loop)
{
    console.log("My name is " + loop["firstname"],""+loop["lastname"],"and my age is "+loop["age"]);
}
