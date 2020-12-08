import Ball from './ball.js';
import Paddle from './paddle.js';
import InputHandler from  './input.js';
import Game from './game.js';


// TODO:
// -ball doesnt rebound proportional to the angle it hit relative to the corner of the paddle

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;



let game = new Game(GAME_WIDTH, GAME_HEIGHT);

game.start();


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

    game.update(deltaTime);
    game.draw(ctx);


    //calc fps:
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;
    fps = Math.round(1 / secondsPassed);
    fpsCount.innerText = Math.floor(fps);


    requestAnimationFrame(gameLoop);

}

gameLoop()