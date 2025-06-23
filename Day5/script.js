// objects: data  structure which is used to store data in key-value pairs.

let new_object = {};
let new_object2 = new Object();

new_object.name = "ramu";
new_object.age = 18;
new_object.salary = 696.96;

console.log(new_object);

let person = {
  firstname: "John",
  lastname: "thedon",
  age: 18,
};

// object method: entries - returns array of key-value pair in an object
let text = Object.entries(person);
console.log(text);

// keys: return key of an object
let key = Object.keys(person);
console.log(key);

// values - return values of an object
let values = Object.values(person);
console.log(values);
