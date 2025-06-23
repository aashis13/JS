// document.addEventListener("DOMContentLoaded", () => {
//   const body = document.body;
//   const startBtn = document.getElementById("strt");

//   function createGameUI() {
//     const gameContainer = document.createElement("div");
//     gameContainer.id = "game-container";
//     body.appendChild(gameContainer);

//     const countryList = document.createElement("ul");
//     countryList.id = "country-list";
//     gameContainer.appendChild(countryList);

//     allCountries.forEach((country) => {
//       const listItem = document.createElement("li");
//       listItem.textContent = country.name;

//       const flagImg = document.createElement("img");
//       flagImg.src = country.flag;
//       flagImg.alt = `${country.name} flag`;
//       flagImg.width = 100;

//       listItem.appendChild(flagImg);
//       countryList.appendChild(listItem);
//     });
//   }
// });
// startBtn.addEventListener("click", () => {
//   startBtn.style.display = "none";
//   createGameUI();
//   const gameContainer = document.getElementById("game-container");
//   gameContainer.style.display = "block";
// });

const allCountries = [
  { name: "France", flag: "https://flagcdn.com/w320/fr.png" },
  { name: "Japan", flag: "https://flagcdn.com/w320/jp.png" },
  { name: "Brazil", flag: "https://flagcdn.com/w320/br.png" },
  { name: "Germany", flag: "https://flagcdn.com/w320/de.png" },
  { name: "India", flag: "https://flagcdn.com/w320/in.png" },
  { name: "Canada", flag: "https://flagcdn.com/w320/ca.png" },
  { name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
  { name: "Italy", flag: "https://flagcdn.com/w320/it.png" },
  { name: "Mexico", flag: "https://flagcdn.com/w320/mx.png" },
  { name: "South Korea", flag: "https://flagcdn.com/w320/kr.png" },
  { name: "Argentina", flag: "https://flagcdn.com/w320/ar.png" },
  { name: "United States", flag: "https://flagcdn.com/w320/us.png" },
  { name: "Russia", flag: "https://flagcdn.com/w320/ru.png" },
  { name: "China", flag: "https://flagcdn.com/w320/cn.png" },
  { name: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png" },
  { name: "Spain", flag: "https://flagcdn.com/w320/es.png" },
  { name: "Portugal", flag: "https://flagcdn.com/w320/pt.png" },
  { name: "Sweden", flag: "https://flagcdn.com/w320/se.png" },
  { name: "Norway", flag: "https://flagcdn.com/w320/no.png" },
  { name: "Netherlands", flag: "https://flagcdn.com/w320/nl.png" },
  { name: "Greece", flag: "https://flagcdn.com/w320/gr.png" },
  { name: "Turkey", flag: "https://flagcdn.com/w320/tr.png" },
  { name: "Egypt", flag: "https://flagcdn.com/w320/eg.png" },
  { name: "South Africa", flag: "https://flagcdn.com/w320/za.png" },
  { name: "Indonesia", flag: "https://flagcdn.com/w320/id.png" },
  { name: "Thailand", flag: "https://flagcdn.com/w320/th.png" },
];

const Round = document.getElementById("round");
const question = document.getElementById("que");
const flagoption = document.getElementById("option");
const Result = document.getElementById("result");
