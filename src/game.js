import Ball from './ball.js';
import Paddle from './paddle.js';
import InputHandler from  './input.js';
import Brick from './brick.js';
import * as Levels from './levels.js';

export default class Game{
    
    constructor(GAME_WIDTH, GAME_HEIGHT){
        
        this.GAMEWIDTH = GAME_WIDTH;
        this.GAMEHEIGHT = GAME_HEIGHT;

    }

    start(){
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        new InputHandler(this.paddle, this);


        //bricks
        // var bricks = [];
        // for ( var i = 0; i< 10; i ++){
        //     //
        // }
        var brickPositions = [];
        const levels = Levels.level1;
        
        var tempPosition = {
            x:30,
            y:40
        };

        this.brick = new Brick(this, tempPosition );
   

    }

    update(deltaTime){
        this.paddle.update(deltaTime);
        this.ball.update(deltaTime);
    }
    
    draw(ctx){ 
        this.paddle.draw(ctx);
        this.ball.draw(ctx);
        

        //brick:
        this.position = {
            x:30,
            y:40
        }

        this.brick.draw(ctx);

    }
}