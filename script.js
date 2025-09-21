let userScore = 0;
let compsScore = 0;

const choice = document.querySelectorAll(".choice");

const genCompChoie = ()=> {
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice
    const compChoice = genCompChoie();
    console.log("comp choice = ", compChoice)
    if(userChoice === compChoice) {
        //Draw Game
    }
};

choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const Userchoice = choice.getAttribute("id");
        playGame(Userchoice);
    });
});
