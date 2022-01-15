const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let IsJump = false;
let position = 0;
let isGameOver = false; 
let score = document.querySelector('#score');
let playerScore = 0;

function KeyUp(event){
    if(event.keyCode == 32){
        if(! IsJump){
       jump();

        }
    }

}

function jump (){
    IsJump = true;

    let UpInterval = setInterval(() => {
        if(position >=150){
            clearInterval(UpInterval);
            //desce
            let downinterval = setInterval (() =>{
                if(position <=0){
                    clearInterval(downinterval);
                    IsJump = false;
                }
                position -=20;
                dino.style.bottom = position + 'px';
           },20 )

        }else{
            //Sobe
        position += 20;
        dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    if (isGameOver) return;

    let scoreCounter = () =>{
        playerScore ++;
        score.innerHTML = `Score <b> ${playerScore}</b>`;
    }
    
    cactus.classList.add('cactus');
    background.appendChild(cactus);
    cactus.style.left = cactusPosition + 'px';
  
    let leftTimer = setInterval(() => {
      if (cactusPosition < -60) {
        // Saiu da tela
        clearInterval(leftTimer);
        background.removeChild(cactus);
      } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
        // Game over
        clearInterval(leftTimer);
        isGameOver = true;
        document.body.innerHTML = `<h1 class="game-over">Fim de jogo! ${playerScore}`;
      } else {
        cactusPosition -= 7;
        cactus.style.left = cactusPosition + 'px';
      }
    }, 20);
    let playerScore = 0;
    interval = setInterval(scoreCounter,200);
    setTimeout(createCactus, randomTime);
  }

  

createCactus();
document.addEventListener('keyup', KeyUp)