const todoinput = document.getElementById("todoinput");
const content = document.getElementById("contentdisplay");

function adder() {
  if (todoinput.value.trim() === "") {
    alert("Need to input something");
  } else {
    let li = document.createElement("li");

    li.innerHTML = todoinput.value;
    content.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  todoinput.value = "";
}

content.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});
