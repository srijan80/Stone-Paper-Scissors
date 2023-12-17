let userScore = 0;
let compScore = 0;
const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
  const option = ["rock", "paper", "scissor"];
  //rock,paper, scissor
  const rndIdx = Math.floor(Math.random() * 3);
  return option[rndIdx];
};

const drawgame = () => {
  console.log("game was draw");
  msg.innerText = "Game was Draw,Try Again";
  msg.style.backgroundColor = "blue";
};

const showWinner = (userwin, userchoice, compChoice) => {
  if (userwin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win");
    msg.innerText = `You win!, ${userchoice} againts ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    console.log("You lose");
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose!,  ${compChoice} againts ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {
  console.log("userchoice =", userchoice);

  //generate computer choice
  const compChoice = genComputerChoice();
  console.log("compChoice =", compChoice);

  if (userchoice === compChoice) {
    //draw game
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compChoice === "scissor" ? false : true;
    } else {
      userwin = compChoice === "rock" ? false : true;
    }
    showWinner(userwin, userchoice, compChoice);
  }
};

choice.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    // console.log("choice was clicked", userchoice)
    playgame(userchoice);
  });
});
