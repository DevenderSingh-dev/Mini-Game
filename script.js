let userScore = 0;
let compsScore = 0;

const choice = document.querySelectorAll(".choice");

const genCompChoice = ()=> {
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]
}

const drawGame = () => {
    console.log("Game was Draw.")
}
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice)
    if(userChoice === compChoice) {
        //Draw Game
        drawGame();
    }
};

choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});

