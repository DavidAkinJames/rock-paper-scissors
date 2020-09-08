const game = ()=> {
let pScore = 0;
let cScore = 0;



//start the game
const startGame = () =>{
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
       introScreen.classList.add("fadeOut");
       match.classList.add("fadeIn");
    });   
};
//play the match
const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    //these are the images for the playerhands and the computer hands
    const playerHand = document.querySelector(".player-hand"); 
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand =>{
        hand.addEventListener('animationend', function(){
           this.style.animation = "";
        });
    });

    //Here are the computer options
    const computerOptions = ['rock', 'paper', 'scissors'];
    //this is where the conputer generates a random number 

     options.forEach(option=>{
         option.addEventListener("click",function() {
             //the computer choice
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
             //We call the compare hands here

             setTimeout(() => {
                //Here is where we call compare hands
                compareHands(this.textContent, computerChoice);
                //Update Images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
              }, 2000);



             //Animation
             playerHand.style.animation = "shakePlayer 2s ease";
             computerHand.style.animation = "shakeComputer 2s ease";


         });
      });   
};


const updateScore = ()=> {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent =cScore;
};



const compareHands = (playerChoice, computerChoice) =>{
    //update text
     const winner = document.querySelector(".winner");
     //This checks for a tie
   if (playerChoice === computerChoice){
       winner.textContent = 'This is a tie';
       return;

   }
//check for rock
if (playerChoice ==='rock'){
    if (computerChoice === 'scissors'){
        winner.textContent = 'Player wins'
        pScore++;
        updateScore();
        return;
    }else{
        winner.textContent = 'Computer Wins'
        cScore++;
        updateScore();
        return;
    }
}
//This checks for paper
if (playerChoice ==='paper'){
    if (computerChoice === 'scissors'){
        winner.textContent = 'Computer wins'
        cScore++;
        updateScore();
        return;
    }else{
        winner.textContent = 'Player Wins'
        pScore++;
        updateScore();
        return;
    }
}

//This checks for scissors
if (playerChoice ==='scissors'){
    if (computerChoice === 'rock'){
        winner.textContent = 'Computer wins'
        cScore++;
        updateScore();
        return;
    }else{
        winner.textContent = 'Player Wins'
        pScore++;
        updateScore();
        return;
    }
}

}



//calls all the inner funtions 
startGame();
playMatch();
};

//start the real game
game();