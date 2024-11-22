//we are gonna use two variables
//to track user's score and the other to tracks computer's score

let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genComputerChoice=()=>{
    const options=["rock","paper","scissor"];
    const randId=Math.floor(Math.random()*3);
    return options[randId];
};
    
const drawGame=()=>{
    console.log("Game was draw!");
    msg.innerText="Game was draw!";
    msg.style.backgroundColor="#2e2d2d";
    
};

const playGame=(userChoice) =>{
    console.log("user choice= ",userChoice);
    const compChoice=genComputerChoice();
    console.log("Comp choice= ",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock"){
            userWin=compChoice === "paper"? false:true;
        }
        else if(userChoice === "paper"){
            userWin=compChoice ==="scissor"? false:true;
        }
        else{
            userWin=compChoice === "rock"? false:true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        /*console.log("choice was clicked",userChoice);*/
        playGame(userChoice);
    });

});

const showWinner=(userWin)=>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        //console.log("You Win!");
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
    }
    else
    {
        compScore++;
        compScorePara.innerText=compScore;
        //console.log("You Lost!");
        msg.innerText="You Lost!Try Again";
        msg.style.backgroundColor="red";
    }   
}

