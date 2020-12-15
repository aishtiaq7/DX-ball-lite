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


        //BRICKS
        this.currentLevel = [];
        
        // console.log(Levels.level1);

        //LOADING LEVELS: 
        Levels.level1.map( (currentValue, index)=>{
            // console.log(`currentValue:${currentValue}`); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            // console.log(`index:${index}`);              // 

            currentValue.filter( (filterValue,filterIndex) => {
                // console.log(`\tfilterValue:${filterValue}`);  // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                // console.log(`\t\ti:${filterIndex}`);    // iterator for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                if( filterValue == 1){
                    // console.log('*_*_*_*_*_* found ->'+ filterValue);
                    var tempPosition = {
                        x: (80 * filterIndex), // 80 -> brick width
                        y: 75 + 25 * index /// 75 -> padding && 25 -> brick height
                    };
                    this.currentLevel.push(new Brick (this, tempPosition ));
                    // return;
                }

            })
            
        });

    }

    update(deltaTime){

        this.currentLevel.forEach(brick =>{
            brick.update(deltaTime);
        });

        this.paddle.update(deltaTime);
        this.ball.update(deltaTime);

    }
    
    draw(ctx){ 
        this.paddle.draw(ctx);
        this.ball.draw(ctx);
        

    
        this.currentLevel.forEach(brick => {
            brick.draw(ctx);
        });

    }
}