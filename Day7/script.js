const hides = document.getElementById("hide");
const modes = document.getElementById("dark");
const body = document.body;
text = document.getElementById("Text");

dark = () => {
  body.classList.toggle("dark");
  // body.classList.toggle("light");
};
hide = () => {
  if (text.innerHtml === "hide") {
    hides.style.display = "block";
    text.innerHtml="show";
  } else {
    hides.style.display = "none";
  }
};
