let array1 = [1, 2, 1, 2, 1, 3, 1, 4, 4, 5];
let i = 0,
  j = 0;
var p,
  counter = 0,
  repeatednumberchecker = new Array();

function countfrequency(array1) {
  while (i < array1.length) {
    p = array1[i];
    repeatednumberchecker.push(p);

    while (j < array1.length) {
      if (p == array1[j]) {
        counter++;
        j++;
      } else {
        j++;
      }
    }

    if (counter >= 4) {
      console.log(p + " is frequent");
    } else if (counter < 4 && counter > 1) {
      console.log(p + " is common");
    } else {
      console.log(p + " is rare");
    }

    counter = 0;

    while (repeatednumberchecker.includes(array1[i])) {
      i++;
    }
    j = i;
  }
}
countfrequency(array1);
