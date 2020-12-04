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


function gameLoop(timeStamp){
        // console.log(`timeStamp:${timeStamp}`);

    let deltaTime = timeStamp - lastTime;
        // console.log(`deltaTime:${deltaTime}`);
    
    lastTime = timeStamp;
        // console.log(`lastTime:${lastTime}`);

    ctx.clearRect(0,0,800,600);
    paddle.update(deltaTime);
    paddle.draw(ctx);

    //BUJINAI!!!!!!!
    requestAnimationFrame(gameLoop);

}

gameLoop()