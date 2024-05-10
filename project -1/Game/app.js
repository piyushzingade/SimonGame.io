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
}let userScore = 0;//it stores userScore
let compScore = 0;//it store computer score

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");
const totalUserScore = document.querySelector("#userscore"); //Improved naming conventions
const totalCompScore = document.querySelector("#compscore"); //Improved naming conventions

const generateCompChoice = ()=>{
    const options = ["paper" , "stone" , "scissor"]; //also here was a minor mistake you had named rock instead of stone
    const num = Math.floor(Math.random()*3);
    console.log("Num :",num);
    return options[num];
}

const draw = ()=>{
    msg.innerText=`Game was drawn.Play again`;
}

const showWinner = (userWin , userChoice , compChoice)=>{
    if(userWin){
        userScore += 1; //Just to avoid risk 
        totalUserScore.innerText = userScore;
        msg.innerText =`Winner ${userChoice} beats ${compChoice}`;
       
    }else{
        compScore += 1; //Just to avoid risk
        totalCompScore.innerText = compScore;
        msg.innerText = `You lost ${compChoice} beats ${userChoice}`;
    }
};


const playgame = (userChoice) => {

    const compChoice = generateCompChoice();

    if(userChoice === compChoice){
        draw();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "scissor" ; // 1 => there was no need of extra conditions this will also return true or false
        }else if(userChoice === "paper"){
            userWin = compChoice === "stone" ; // 1
        } else {
            userWin = compChoice === "paper" ; // 1
        }
        showWinner(userWin ,userChoice,compChoice);
    }
};

choices.forEach((choice) => { //improved readability choice changed to choice because instead of mapping choice , we will map choices
    choice.addEventListener("click", () => {
        const userChoice = choice.querySelector('img').getAttribute('alt'); //since choice doesn't have any id attribute , therefore we selected img and took it alt value from .getAttribute
        console.log(userChoice);
        playgame(userChoice);

    });
});


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
