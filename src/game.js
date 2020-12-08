import Ball from './ball.js';
import Paddle from './paddle.js';
import InputHandler from  './input.js';

export default class Game{

    constructor(GAME_WIDTH, GAME_HEIGHT){
        
        this.GAMEWIDTH = GAME_WIDTH;
        this.GAMEHEIGHT = GAME_HEIGHT;
        
        // console.log(`game > GameWidth:${this.GAMEWIDTH} , GameHeight:${this.GAMEHIEGHT}`);

    }

    start(){
    
        
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        new InputHandler(this.paddle, this);

    }

 

    update(deltaTime){

        this.paddle.update(deltaTime);
        this.ball.update(deltaTime);

        
        
    }
    
    draw(ctx){
        
        this.paddle.draw(ctx);
        this.ball.draw(ctx);
         

    }


}