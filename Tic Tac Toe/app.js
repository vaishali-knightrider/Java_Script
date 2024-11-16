let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#Reset-Btn");
let newGameBtn=document.querySelector("#New-Btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;//player X,player Y
let counter=0;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const gameDraw  = () =>{
    
    msg.innerText = `It's a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};  
   
const resetGame=()=>{
    turnO=true;
    counter=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        //console.log("box was clicked");
        if(turnO)
        {
            box.innerText="O";
            box.style.color = "maroon";
            turnO=false;//dusre ki turn aa gyi ab
        }
        else{
            box.innerText="X";
            box.style.color = "green";
            turnO=true;
        }
        box.disabled=true;
        counter++;

        let isWinner= checkWinner();
        if(counter === 9 && !isWinner)
        {
            gameDraw();
        }
    });
});

/*for the reset button*/
const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

/* this is to make sure that a winner is declared ,we cant
play that game anymore*/

const disableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const showWinner=(winner) =>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");/* to make the  mas container visible*/
    disableBoxes();
}


const checkWinner=()=>{
    for(let pattern of winPatterns)
    {
        
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if(pos1val=== pos2val && pos2val=== pos3val){
                showWinner(pos1val);
            }

        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

