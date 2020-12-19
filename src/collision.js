
import Paddle from './paddle.js';
import Ball from './ball.js';


// Rebounds off top of paddle
function isCollision (paddle, ball){
    
    //top of paddle:
    let paddlePositionY = paddle.position.y;
    let paddleTopLeftCorner = paddle.position.x;
    let paddleTopRightCorner = paddle.position.x + paddle.width;

    //ball
    let ballBottom = ball.y + ball.r;
    let ballPositionX = ball.x;

    //only comparing with TOP of paddle. 
    if( ballBottom > paddlePositionY && 
        ballPositionX >= paddleTopLeftCorner && 
        ballPositionX <= paddleTopRightCorner){
        // console.log('***collision***');
        return true;
    }

    return false;
}

function sideCollision(paddle,ball) {
    //hitting Paddle's right side:
    if( ball.x- ball.r < paddle.position.x + paddle.width &&
        ball.x- ball.r > paddle.position.x &&
        ball.y+ ball.r > paddle.position.y ){
        // console.log('RIGHT of paddle');

        // console.log(`ball.x : ${ball.x}`);
        // console.log(`paddle.position.x : ${paddle.position.x}`);
        return true;
    }

}
function ballWithPaddleLeftSide(paddle,ball) {
    //hitting Paddle's left side:
    if( ball.x+ ball.r >= paddle.position.x &&
        ball.x+ ball.r <= paddle.position.x + paddle.width &&
        ball.x- ball.r > 0 &&
        ball.y+ ball.r >= paddle.position.y 
        ){
        return true;
    }
}

export {isCollision, sideCollision, ballWithPaddleLeftSide};