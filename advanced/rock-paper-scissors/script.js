let buttons = document.querySelectorAll('.icon');
let gameIcons = document.querySelector('.game-icons');
let game = document.querySelector('.game');
let imgUser = document.querySelector('#img-user');
let imgComputer = document.querySelector('#img-computer');
let againButton = document.querySelector('#again');
let result = document.querySelector('.result');
let myScores = document.querySelector('#my-scores');
let rulesBtn = document.querySelector('#rules-btn');
let closeBtn = document.querySelector('#close-btn');
let resetBtn = document.querySelector('#reset-btn');
let rules = document.querySelector('.rules');

let score = 0;
const choices = ['paper', 'scissors', 'rock'];

let randomChoice = () => {
    return choices[Math.floor(Math.random()*choices.length)]
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        gameIcons.style.display = 'none';
        game.style.display = 'grid';
        userChoice = button.getAttribute('choice');
        winner();
    })
})

let winner = () => {
    const computerChoice = randomChoice()
    console.log('computer: ' + computerChoice);
    console.log('user: ' + userChoice);

    document.querySelectorAll(".game img").forEach(img => img.remove());
        
    let img1 = document.createElement("img");
    img1.src = "./images/icon-"+userChoice+".svg";
    imgUser.appendChild(img1);
    img1.className = "icon "+ userChoice;

    let img2 = document.createElement("img");
    img2.src = "./images/icon-"+computerChoice+".svg";
    img2.className = "icon "+ computerChoice;
    imgComputer.appendChild(img2);
    
    if(computerChoice === userChoice ) {
        console.log('remis');
        result.innerHTML = 'No Contest';
    } else if (computerChoice === 'paper' && userChoice === 'rock' || computerChoice === 'rock' && userChoice === 'scissors' || computerChoice === 'scissors' && userChoice === 'paper') {
        console.log('wygrywa komputer');
        result.innerHTML = 'You Lose';
        score-=1;
        myScores.innerHTML = score;
    } else {
        console.log('wygrywa user');
        result.innerHTML = 'You Win';
        score+=1;
        myScores.innerHTML = score;
    }
}

againButton.addEventListener('click', () => {
    gameIcons.style.display = 'grid';
    game.style.display = 'none';
})

rulesBtn.addEventListener('click', () => {
    rules.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    rules.style.display = 'none';
})

resetBtn.addEventListener('click', () => {
    score=0;
    myScores.innerHTML = score;
})