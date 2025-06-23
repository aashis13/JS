let a = "";
for (let i = 0; i < 5; i++) {
  for (let j = 5; j >= i; j--) {
    a += " ";
  }
  for (let k = 0; k <= i; k++) {
    a += " *";
  }
  console.log(a);
  a = "";
}
