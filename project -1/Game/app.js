let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#compscore");

const genCompChoice = ()=>{
    const options = ["paper" , "rock" , "scissors"];
    const num = Math.floor(Math.random()*3);
    return options[num];
}

const draw = ()=>{
    msg.innerText=`Game was drawn.Play again`;
}

const showWinner = (userWin , userChoice , compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =`Winner ${userChoice} beats ${compChoice}`;
       
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost ${compChoice} beats ${userChoice}`;
    }
};


const playgame = (userChoice) => {

    const compChoice = genCompChoice();

    if(userChoice===compChoice){
        draw();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin ,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute('id');
        playgame(userChoice);

    });
});
