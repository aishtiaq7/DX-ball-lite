import {isCollision } from './collision.js';

export default class Paddle {

    constructor(game){
        this.game = game;
        this.GAMEWIDTH = game.GAMEWIDTH;
        this.GAMEHEIGHT = game.GAMEHEIGHT;

        //PADDLE dimensions
        this.width = 150;
        this.height = 30;

        //Paddle Position
        this.position ={
            x: this.GAMEWIDTH /2 - this.width/2,
            y: this.GAMEHEIGHT -this.height -10
        }
        this.maxSpeed = 7;
        this.speed = 0;
    }

    draw(ctx) {
        ctx.fillStyle = 'purple';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

        // console.log(`PADDLE - x:${this.position.x}, y:${this.position.y}`);
    }

    update(deltaTime){

        if(!deltaTime) return ;
        this.position.x += this.speed;

        if(this.position.x < 0 ){ //paddle on left edge
            this.position.x = 0;
        }
        if( this.position.x > this.GAMEWIDTH - this.width ){ //paddle on right edge
            this.position.x = this.GAMEWIDTH - this.width;          
        }
        
    }

    moveRight(){
        this.speed = this.maxSpeed;
    }

    moveLeft(){
        this.speed = -this.maxSpeed;
    }

    stop(){
        this.speed = 0;
    }
}