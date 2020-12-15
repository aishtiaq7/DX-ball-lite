export function ballCollidesBrick(ball,brick){

    //Ball
    let topOfBall = ball.y - ball.r;
    let bottomOfBall = ball.y + ball.r;
    let rightOfBall = ball.x + ball.r;
    let leftOfball = ball.x - ball.r;

    //Brick
    let topOfBrick = brick.y;
    let bottomOfBrick = brick.y + brick.height;
    let leftOfBrick = brick.x;
    let rightOfBrick = brick.x + brick.width;


    if(rightOfBall >= leftOfBrick && ball.x < leftOfBrick &&
        ball.y > topOfBrick && ball.y < bottomOfBrick){
        return 'left';
    }else if( topOfBall < bottomOfBrick && ball.y > bottomOfBrick && 
        leftOfball > leftOfBrick && rightOfBall < rightOfBrick ){
        return 'bottom'
    }else if( bottomOfBall > topOfBrick && ball.y < topOfBrick &&
        leftOfball > leftOfBrick && rightOfBall < rightOfBrick) {
        return 'top';
    }else if( leftOfball < rightOfBrick && ball.x > rightOfBrick && 
        ball.y > topOfBrick && ball.y < bottomOfBrick){
        return 'right';
    }else{
        return 'noHit';
    }
    
}
