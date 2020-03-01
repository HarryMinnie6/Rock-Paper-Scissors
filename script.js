var userScore = 0;
var computerScore = 0;
const updateUserScore = document.querySelector('#user-score');
const updateComputerScore = document.querySelector('#computer-score');
const scoreBoard = document.querySelector('.scoreboard')
const result = document.querySelector('.result')
const rockChoice = document.querySelector('#rock')
const paperChoice = document.querySelector('#paper')
const scissorsChoice = document.querySelector('#scissors')

//getting the computer choice
function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber  = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}
//capitalize selections in the result display
function toCapitalLetter(word){
    if(word === 'rock')
    return 'Rock';
    if(word === 'scissors')
    return 'Scissors';
    if(word === 'paper')
    return 'Paper'
}

//what happens if you win
function win(user, computer){
    userScore++
    updateUserScore.innerHTML = userScore
    updateComputerScore.innerHTML = computerScore
    result.innerHTML = `${toCapitalLetter(user)} beats ${toCapitalLetter(computer)}. You WIN!`
    document.getElementById(user).classList.add('green-glow')
    setTimeout(function() {document.getElementById(user).classList.remove('green-glow') }, 350)
}

//what happens if you lose
function lose(user, computer){
    computerScore++
    updateComputerScore.innerHTML = computerScore
    updateUserScore.innerHTML = userScore
    result.innerHTML =  `${toCapitalLetter(computer)} beats ${toCapitalLetter(user)}. You LOSE!`
    document.getElementById(user).classList.add('red-glow')
    setTimeout(function() {document.getElementById(user).classList.remove('red-glow') }, 350)   
}
//what happens if you draw
function draw(user, computer){
    result.innerHTML = `It's a draw`
    document.getElementById(user).classList.add('gray-glow')
    setTimeout(function() {document.getElementById(user).classList.remove('gray-glow') }, 350)
    
}


// the code to make the game work/ deiciding if its a win, lose, draw
function game(userChoice){
    const computerChoice = getComputerChoice()
switch (userChoice + computerChoice){
    //user wins if...
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
        win(userChoice, computerChoice)
        break;
    // computer wins if...    
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock" :
        lose(userChoice, computerChoice)
        break;
    //draw if...    
    case "rockrock":
    case "paperpaper" :
    case "scissorsscissors"   :
        draw(userChoice, computerChoice)
        break;              
}
}

//what happens if you click on the rock choice
rockChoice.addEventListener('click', function(){
    game('rock')   
});

//what happens if you click on the paper choice
paperChoice.addEventListener('click', function(){
    game('paper')   
});

//what happens if you click on the scissors choice
scissorsChoice.addEventListener('click', function(){
    game('scissors')   
});
