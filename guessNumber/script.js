let randNum = parseInt(Math.random()*100 + 1);
const form = document.getElementById("convas");
const result = document.getElementById("result");
const remGuess = document.getElementById("remained");
const prev = document.getElementById("prevGuess");
let playGame = true;
let trialsLeft = 10;
remGuess.innerText = `${trialsLeft}`;
let array = [];

function trials(){
    remGuess.innerText = `${trialsLeft}`;
    if(trialsLeft <= 0){
        result.innerText = `You Lost! Number was ${randNum}`;
        endGame();
    }
}
function validateNum(num){
    if(num > 0 && num <= 100){
        return true;
    }
    else{
        return false;
    }
}
function displayPrevGuesses(){
    prev.innerText = `${array} `
}
if(playGame == true){
    console.log(randNum);
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        const num = document.getElementById("num").value;
        document.getElementById("num").value = "";
        if(validateNum(num)){
            array.push(num);
            if(num == randNum){
                result.innerText = "Congratulations! You Won";
                endGame();
            }
            else if(num < randNum){
                result.innerText = "Try a Bigger number";
                trialsLeft--;
            }
            else{
                result.innerText = "Try a Smaller number";
                trialsLeft--;
            }
        }
        else{
            result.innerText = "Enter a valid number";
        }
        trials();
        displayPrevGuesses();
    })
}

function endGame(){
    playGame = false;
    document.getElementById("button").disabled = true;

    const startGame = document.createElement("button");
    startGame.id = "startGame";
    startGame.innerText = "Start new Game";
    startGame.style.color = "black";
    startGame.style.border = "2px solid black";
    startGame.style.padding = "1%";
    form.appendChild(startGame);

    newGame();

}
function newGame(){
    const startG = document.getElementById("startGame");
    console.log(startG);
    startG.addEventListener("click", (e)=>{
        e.preventDefault();
        randNum = parseInt(Math.random()*100 + 1);
        trialsLeft = 10;
        array = [];
        remGuess.innerText = `${trialsLeft}`;
        form.removeChild(startG);
        result.innerText = "";
        prev.innerText ="";
        playGame = true;
        document.getElementById("button").disabled = false;
    })
}
