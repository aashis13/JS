document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const startBtn = document.getElementById("strt");

  function createGameUI() {
    startBtn.style.display = "none";

    const gameDiv = document.createElement("div");
    gameDiv.id = "game";

    const choices = ["Rock✊", "Paper🖐️", "Scissors✌️"];
    const btnContainer = document.createElement("div");
    btnContainer.id = "choices";

    choices.forEach((choice) => {
      const btn = document.createElement("button");
      btn.textContent = choice;
      btn.className = "choice-btn";
      btn.onclick = () => playRound(choice);
      btnContainer.appendChild(btn);
    });

    const resultDiv = document.createElement("div");
    resultDiv.id = "result";

    const scoreDiv = document.createElement("div");
    scoreDiv.id = "score";
    scoreDiv.textContent = "Player: 0   vs   Computer: 0";

    gameDiv.appendChild(btnContainer);
    gameDiv.appendChild(resultDiv);
    gameDiv.appendChild(scoreDiv);
    body.appendChild(gameDiv);

    let playerScore = 0;
    let computerScore = 0;

    function playRound(playerChoice) {
      const computerChoice = choices[Math.floor(Math.random() * 3)];
      let result = "";

      if (playerChoice === computerChoice) {
        result = `It's a tie! Both chose ${playerChoice}.`;
      } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
      ) {
        result = `You win! ${playerChoice} beats ${computerChoice}.`;
        playerScore++;
      } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}.`;
        computerScore++;
      }

      resultDiv.textContent = result;
      scoreDiv.textContent = `Player: ${playerScore}     vs      Computer: ${computerScore}`;
    }
  }

  startBtn.addEventListener("click", createGameUI);
});
