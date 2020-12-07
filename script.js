import Ball from './ball.js';
import Paddle from './paddle.js';
import InputHandler from  './input.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// canvas.style.width = `${GAME_WIDTH}px`;
// canvas.style.height = `${GAME_HEIGHT}px`;


let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball(GAME_WIDTH,GAME_HEIGHT);


new InputHandler(paddle);





//fps
let secondsPassed;
let oldTimeStamp;
let fps;
const fpsCount = document.getElementById("show-fps");


let lastTime = 0;
function gameLoop(timeStamp){
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp; 

    ctx.clearRect(0,0,800,600);

    //Paddle:
    paddle.update(deltaTime);
    paddle.draw(ctx);

    //Ball:
    ball.update(deltaTime);
    ball.draw(ctx);

    //calc fps:
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;
    fps = Math.round(1 / secondsPassed);
    fpsCount.innerText = Math.floor(fps);


    requestAnimationFrame(gameLoop);

}

gameLoop()