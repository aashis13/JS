let count = 0;

function changeCount(value) {
  count += value;
  document.getElementById("count").innerText = count;
}
function toggleMode() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
}

Reset=()=>{
    document.getElementById("count").innerText = 0;

}
