
//Function to determine collision between 2 objects
import Paddle from './paddle.js';
import Ball from './ball.js';


// Expects Paddle and Ball object
function isCollision (paddle, ball){
    
    //top of paddle:
    let paddlePositionY = paddle.position.y;
    let paddleTopLeftCorner = paddle.position.x;
    let paddleTopRightCorner = paddle.position.x + paddle.width;

    //ball
    let ballBottom = ball.y + ball.r;
    let ballPositionX = ball.x;

    if( ballBottom > paddlePositionY && ballPositionX >= paddleTopLeftCorner && ballPositionX <= paddleTopRightCorner){
        // console.log('***collision***');
        return true;
    }

    return false;

    
}

export {isCollision};