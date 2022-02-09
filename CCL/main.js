//Basic canvas setup "allow us to to use canvas builtin methods"
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;


// calling the DOCUMENT OBJECT MODEL // getting accsess to our html elements
let startBtn = document.getElementById("startBtn");
let scoreBtn = document.getElementById("score");
let restartBtn = document.getElementById('restartBtn');
let howtoplaybtn = document.getElementById('howtoplay');
let backbtn = document.getElementById('backbtn');
let audio = document.getElementById('audio');

//Global variables
let spacePressed = false;
let frame = 0; // keep track of frame count over ouranimation loop
let socre = 0;
let gamespeed = 2; // we can use it to move obsticales ,  background 
//let healthPercentage = 100;


//Startup Screen
const screen = new Image();
screen.src = './others/startscreen4.png';
function startfresh() {
    ctx.drawImage(screen, 0, 0, 600, 600);
    restartBtn.style.display = 'none';
    startBtn.style.display = 'flex';
    howtoplaybtn.style.display = 'flex';
    scoreBtn.style.display = 'none';
    backbtn.style.display = 'none';

}

//How to play Screen
const play = new Image();
play.src = './others/howtoplayy.png';
function howtoplay() {
    ctx.drawImage(play, 0, 0, 600, 600);
    startBtn.style.display = 'none';
    backbtn.style.display = 'block';
    howtoplaybtn.style.display = 'none';
}


//ANIMATING THE BACKGROUND
const background = new Image();
background.src = "./others/hahaa1.png";

const BG = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
}



function handleBackground() {
    if (BG.x1 <= -BG.width + gamespeed) { BG.x1 = BG.width; }
    else { BG.x1 -= gamespeed; }
    if (BG.x2 <= -BG.width + gamespeed) { BG.x2 = BG.width; }
    else { BG.x2 -= gamespeed; }
    ctx.drawImage(background, BG.x1, BG.y, BG.width, BG.height);
    ctx.drawImage(background, BG.x2, BG.y, BG.width, BG.height);

}

function handelHealth() {
    setTimeout(() => {
        setInterval(function () {
            //each 3 s reduce the fuel health... by 5 
            health.health -= 5;
            health.healthPercentage -= 5;

        }, 4000)
    }, 2000);
}



//INTIALIZING THE GAME
function IntializeGame() {
    startBtn.style.display = 'none';
    scoreBtn.style.display = 'flex';
    howtoplaybtn.style.display = 'none';
    animate();
    handelHealth();
}


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clears the entire canvas between every frame of animation
    scoreBtn = document.getElementById("score").innerHTML = socre;//view the score outside the canvas
    handleBackground();
    handelFireBalls();
    handelfuel();
    rocket.update();
    rocket.draw();
    health.update();
    health.draw();
    handelFuelTankCollision();//collison
    handelFireBallsCollisiona();//collision
    if (handelFireBallsCollisiona()) {return };
    requestAnimationFrame(animate); // the game loop
    frame++;
}




// call back function
//keydown = keyprssed
window.addEventListener('keydown', function (e) {
    if (e.code === "Space" || e.code === "ArrowUp") {
        spacePressed = true;
        e.preventDefault();
        return false;
    }
});

//keyup = keyrealsed
window.addEventListener('keyup', function (e) {
    if (e.code === "Space" || e.code === "ArrowUp") {
        spacePressed = false;
        rocket.frameX = 0;
    }
})




function handelFireBallsCollisiona() {

    for (let i = 0; i < fireBallsArray.length; i++) {
        //The rocket body
        if (!(rocket.x + rocket.width < fireBallsArray[i].x) && !(rocket.y > fireBallsArray[i].y + fireBallsArray[i].height)
            && !(rocket.x > fireBallsArray[i].x + fireBallsArray[i].width) && !(rocket.y + rocket.height < fireBallsArray[i].y)

        ) {
            //collison detected 
            ctx.font = "bolder 35px Georgia";
            ctx.fillStyle = 'white';
            ctx.fillText("Game over your score is " + socre, 60, canvas.height / 2 );
            restartBtn.style.display = 'flex';//show restart button
            ctx.fillStyle = "rgba(0, 0, 0, 0.2)";// Dimmer background
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            audio.pause();
            audio.currentTime = 0;
            return true;


            //The rocket tip
        } else if (!((rocket.x1 + rocket.width1) + 2 < fireBallsArray[i].x) && !(rocket.y1 > fireBallsArray[i].y + fireBallsArray[i].height)
            && !(rocket.x1 > fireBallsArray[i].x + fireBallsArray[i].width) && !(rocket.y1 + rocket.height1 < fireBallsArray[i].y)) {

            ctx.font = "bolder 35px Georgia";
            ctx.fillStyle = 'white';
            ctx.fillText("Game over your score is " + socre, 60, canvas.height / 2 );
            restartBtn.style.display = 'flex';
            ctx.fillStyle = "rgba(0, 0, 0, 0.2)";;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            audio.pause();
            audio.currentTime = 0;
            return true;

        }
    }

}

//fuel tanks collision detection
function handelFuelTankCollision() {
    for (let i = 0; i < fuelArray.length; i++) {
        if (!(rocket.x + rocket.width < fuelArray[i].x) && !(rocket.y > fuelArray[i].y + fuelArray[i].height)
            && !(rocket.x > fuelArray[i].x + fuelArray[i].width) && !(rocket.y + rocket.height < fuelArray[i].y)

        ) {
            fuelArray.pop();
            health.health += 15;
            health.healthPercentage += 15;


            //console.log("fuel colliding");
        } else if (!((rocket.x1 + rocket.width1) + 2 < fuelArray[i].x) && !(rocket.y1 > fuelArray[i].y + fuelArray[i].height)
            && !(rocket.x1 > fuelArray[i].x + fuelArray[i].width) && !(rocket.y1 + rocket.height1 < fuelArray[i].y)) {

            fuelArray.pop();
            health.health += 10;//fuel health bar
            health.healthPercentage += 10;//fuel health percentage
        }
    }
}





