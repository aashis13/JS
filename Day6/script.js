console.log(document);

let h1 = document.getElementsByTagName("h1");
console.log(h1);
let yoo = document.getElementById("a");
console.log(yoo);
// yoo.style.color = "red";
h1[0].style.color = "red";
yoo.textContent;
yoo.innerText = "Hitler";
// document.getElementsByTagName("h1");
h1[1].style.color = "Green";

let yup = document.getElementsByClassName("b");
h1[2].style.color = "Grey";
console.log(yup);

let querry = (document.querySelector(".b").style.color = "yellow");
console.log("querry");

let query = (document.querySelector("#a").style.color = "Blue");
console.log(query);

// let cloud = document.querySelectorAll("#a").style.color = "Grey";
// console.log(cloud);

let loop = document.getElementById("hello");

loop.innerHTML = "<i>Hellllooo</i>";
console.log(loop);

loop.setAttribute("class","heeeee");


loop.classList.add("first");
loop.classList.add("second");
loop.classList.remove("second");

loop.classList.toggle("third"); 
loop.classList.toggle("first"); 

let body = tagname("body"); 

