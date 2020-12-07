import Paddle from './paddle.js';
import InputHandler from  './input.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// canvas.style.width = `${GAME_WIDTH}px`;
// canvas.style.height = `${GAME_HEIGHT}px`;


let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(paddle);

let lastTime = 0;

//fps
let secondsPassed;
let oldTimeStamp;
let fps;
const fpsCount = document.getElementById("show-fps");

function gameLoop(timeStamp){
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0,0,800,600);
    
    paddle.update(deltaTime);
    paddle.draw(ctx);

    //calc fps:
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;
    fps = Math.round(1 / secondsPassed);
    // console.log(`fps:${fps}`);
    fpsCount.innerText = Math.floor(fps);

    //BUJINAI!!!!!!!
    requestAnimationFrame(gameLoop);

}

gameLoop()