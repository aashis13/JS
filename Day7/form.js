let storer = {};
let realname = document.getElementById("name");
let realemail = document.getElementById("email");
let realpassword = document.getElementById("password");
// let validity=false;
let nameerror = document.getElementById("namecheck");
let emailerror = document.getElementById("emailcheck");
let passerror = document.getElementById("passcheck");

function passchecker() {
  passerror.textContent = "password must contain 6 letters";
  passerror.style.display = "block";
}
function userchecker() {
  nameerror.textContent = "name must have 4 letters";
  nameerror.style.display = "block";
}
function emailchecker() {
  emailerror.textContent = "email must have 4 letters and '@'";
  emailerror.style.display = "block";
}

function submiter(event) {
  event.preventDefault();

  if (realname.value.trim().length < 4) {
    userchecker();
  }
  if (realpassword.value.length < 6) {
    passchecker();
  }
  if (!realemail.value.includes("@")) {
    emailchecker();
  } else {
    storer = {
      Name: realname.value,
      Email: realemail.value,
      Password: realpassword.value,
    };
    alert("Details Submitted ✅");
    realname.value = "";
    realemail.value = "";
    realpassword.value = "";
  }
}
var confirmation = 1;
let textyer = document.getElementById("Showdetails");
textyer.innerHTML = "Show Details";
let a = document.getElementById("displaytable");
a.style.display = "none";

function shower() {
  let a = document.getElementById("displaytable");

  if (confirmation == 0) {
    confirmation++;
    a.style.display = "none";
    textyer.innerText = "Show Details";
  } else {
    a.style.display = "block";
    a.innerHTML = "";
    for (let values in storer) {
      a.innerHTML += values + ": " + storer[values] + "<br>";
    }
    confirmation--;
    textyer.innerText = "Hide Details";
  }
}

nameerror.style.display = "none";
passerror.style.display = "none";
emailerror.style.display = "none";
