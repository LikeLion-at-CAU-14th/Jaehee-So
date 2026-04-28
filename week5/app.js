// 1.js파일에서 접근해야하는 html dom 요소 선언
const myHandText=document.getElementById("my-hand-text");
const myHandIcon=document.getElementById("my-hand-icon");

const computerText=document.getElementById("computer-hand-text");
const computerIcon=document.getElementById("computer-hand-icon");

const rockBtn=document.getElementById("rock");
const scissorsBtn=document.getElementById("scissors");
const paperBtn=document.getElementById("paper");

let myScore=0;
let comScore=0;

const resultDisplay=document.getElementById("display-result");
const myScoreDisplay = document.getElementById("my-score-val");
const comScoreDisplay = document.getElementById("com-score-val");

const resetBtn = document.getElementById("reset-button");
const darkBtn=document.getElementById("dark-mode");
const darkIcon = document.getElementById("dark-mode-icon");

// 2.이벤트 설정
rockBtn.addEventListener("click",displayMyChoice);
scissorsBtn.addEventListener("click",displayMyChoice);
paperBtn.addEventListener("click",displayMyChoice);
resetBtn.addEventListener("click",reset);
darkBtn.addEventListener("click",() => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode'))
        darkIcon.className='fa-solid fa-sun';
    else
        darkIcon.className='fa-solid fa-moon';

});

// 3. displayMyChoice  함수 설정
function displayMyChoice(e){

    let clickedBtn=e.currentTarget.id;
    let clickedIcon=e.target.className;

    myHandText.innerText=clickedBtn;
    myHandIcon.className=clickedIcon;

    start(clickedBtn);

}

// 4. 랜덤으로 뱉는 컴퓨터
function getComChoice(){
    const randomValue = {
        0:["rock","fa-regular fa-hand-back-fist"],
        1:["scissors","fa-regular fa-hand-scissors fa-rotate-90"],
        2:["paper","fa-regular fa-hand"],
    };

    const randomIndex=Math.floor(Math.random()*3);

    return randomValue[randomIndex];
}

// 5. 컴퓨터의 선택이 화면에 보이도록 하는 함수
function displayComChoice(result){
    computerText.innerText=result[0];
    computerIcon.className=result[1];
}

// 6. start 함수
function start(myChoice){
    let resultArray=getComChoice();
    let comChoice = resultArray[0];
    displayComChoice(resultArray);
    judge(myChoice,comChoice); 
}

function judge(myChoice,comChoice){
    if(myChoice==comChoice){
        resultDisplay.innerText="Draw!";
    }
    else if((myChoice === "rock" && comChoice === "scissors") ||
        (myChoice === "scissors" && comChoice === "paper") ||
        (myChoice === "paper" && comChoice === "rock"))
        {
            resultDisplay.innerText="Win!";
            myScore++;
        }
    else{
        resultDisplay.innerText="Lose!";
        comScore++;
    }
    myScoreDisplay.innerText=myScore;
    comScoreDisplay.innerText=comScore;
}

function reset(){
    myScore=0;
    comScore=0;
    myScoreDisplay.innerText="0";
    comScoreDisplay.innerText="0";
    resultDisplay.innerText = "RESET";
}
