const userScoreSpan = document.querySelector("#user-score");
const computerScoreSpan = document.querySelector("#computer-score");
const resultP = document.querySelector("#result");
const rockChoise = document.querySelector("#rock");
const paperChoise = document.querySelector("#paper");
const scissorsChoise = document.querySelector("#scissors");
const restartBtn = document.querySelector("#restart-btn");

let userPoint = 0;
let computerPoint = 0;

let options = {
    1: ["rock", rockChoise],
    2: ["paper", paperChoise],
    3: ["scissors", scissorsChoise]
};

const getComputerChoise = () => options[Math.ceil(Math.random() * 3)];

function animation(userChoise, computerChoise){
    userChoise.classList.add("active");
    computerChoise.classList.add("active");

    setTimeout(()=>{
        userChoise.classList.remove("active");
        computerChoise.classList.remove("active");
    },600);
};

const update = ()=>{
    userScoreSpan.innerHTML = userPoint;
    computerScoreSpan.innerHTML = computerPoint;
};

const win = ()=>{
    userPoint++;
    resultP.textContent = "YOU WIN";
    update();
};

const draw = ()=>{
    resultP.textContent = "DRAW";
};

const lose = ()=>{
    computerPoint++;
    resultP.textContent = "YOU LOSE";
    update();
};

function game(userChoise, computerChoise){
    switch(`${userChoise}-${computerChoise}`){
        case "rock-scissors":
        case "paper-rock":
        case "scissors-paper":
            win();
            break;
        case "rock-rock":
        case "paper-paper":
        case "scissors-scissors":
            draw();
            break;
        default:
            lose();
    };

    setTimeout(()=>{
        resultP.textContent = "RESULT..."
    },1000);
};

[rockChoise, paperChoise, scissorsChoise].forEach(choise =>{
    choise.addEventListener("click", (e)=>{
        //Create random valiables
        [computerChoise, computerValiable] = getComputerChoise();
        //
        switch(e.currentTarget){
            case rockChoise:
                game("rock", computerChoise);
                animation(rockChoise, computerValiable);
                break;
            case paperChoise:
                game("paper", computerChoise);
                animation(paperChoise, computerValiable);
                break;
            case scissorsChoise:
            game("scissors", computerChoise);
            animation(scissorsChoise, computerValiable);
            break;    
        };
    });
});

restartBtn.addEventListener("click", ()=>{
    userScoreSpan.innerHTML = 0;
    computerScoreSpan.innerHTML = 0;
    userPoint = 0;
    computerPoint = 0;
});
