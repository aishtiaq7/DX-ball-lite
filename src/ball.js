import {isCollision, sideCollision,ballWithPaddleLeftSide } from './collision.js';

export default class Ball{

    constructor(game){
        this.GAMEWIDTH = game.GAMEWIDTH;
        this.GAMEHEIGHT = game.GAMEHEIGHT;
        this.game = game;

        this.x = this.GAMEWIDTH/2;
        this.y = this.GAMEHEIGHT/2;
        this.r = 15; //px

        this.maxSpeed = 4;
        this.speedX = this.maxSpeed;
        this.speedY = this.maxSpeed;
        
    }

    update(deltaTime) {

        
        // console.log(`BALL - x:${this.x}, y:${this.y}`);
        if(deltaTime== undefined){
            return ; 
        }

        //Collision : Top of Paddle
        var ballCollidesPaddleTop = isCollision(this.game.paddle,this);
        if(ballCollidesPaddleTop){
            // console.log('Top of Paddle');
            this.speedY *=-1;
        }
        //Collision : Top and Corner of paddle
        else if( sideCollision(this.game.paddle, this) && ballCollidesPaddleTop ){
            this.speedX *= -1;
            this.speedY *= -1;
            // console.log('Top and Corner');
        }

        //Collision: Left corner of paddle
        else if( ballWithPaddleLeftSide(this.game.paddle,this)) {
            this.speedX *= -1;
            this.speedY *= -1;
            // console.log('Left corner');
        }
        //Collision: Side of paddle
        else if(sideCollision(this.game.paddle, this)){
            this.speedX *= -1;
            this.speedY *= -1;
            // console.log('Side of paddle');

        }
        else{
            //do nothing
        }


        //Ball 0 < x < GAMEWIDTH
        if( (this.x)<0+this.r){
            this.speedX = this.speedX*-1;
        } else if( (this.x + this.r )> this.GAMEWIDTH ){
            this.speedX = this.speedX*-1;
        }
        
        //Ball 0 < y < GAMEHEIGHT
        if( (this.y)<0+this.r){ 
            this.speedY = this.speedY*-1;
        } else if( (this.y + this.r )> this.GAMEHEIGHT ){
            this.speedY = this.speedY*-1;
        }
    

        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw(ctx){
        
        ctx.fillStyle = 'red';
        ctx.beginPath();
        // arc(x, y, radius, startAngle, endAngle, anticlockwise)
        ctx.arc(this.x,this.y, this.r, 0, (Math.PI/180)*360, false);
        ctx.fill();
        ctx.stroke();


    }
}