import Ball from './ball.js';
import Paddle from './paddle.js';
import InputHandler from  './input.js';
import Brick from './brick.js';
import * as Levels from './levels.js';

const showLivesRemaining = document.getElementById("livesRemaining"); 

const GAMESTATE = {
    NEWLEVEL:0,
    MENU:1,
    RUNNING:2, // done
    PAUSED:3,  //done
    GAMEOVER:4, //done 
}

export default class Game{
    
    constructor(GAME_WIDTH, GAME_HEIGHT){
        
        this.GAMEWIDTH = GAME_WIDTH;
        this.GAMEHEIGHT = GAME_HEIGHT;

        this.gamestate = GAMESTATE;
        
        this.currentLevelIndex = 0;
        this.levels = [ Levels.level1,Levels.level2,Levels.level3 ];
        this.lives = 3;

    }

    start(){
        this.gamestate = GAMESTATE.RUNNING;

        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        new InputHandler(this.paddle, this);

        //BRICKS
        this.currentLevel = [];
        
        //LOADING LEVELS: 
        this.levels[this.currentLevelIndex].map( (currentValue, index)=>{
            currentValue.filter( (filterValue,filterIndex) => {
                if( filterValue == 1){
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

    loadNextLevel(){
        this.levels[this.currentLevelIndex].map( (currentValue, index)=>{
            currentValue.filter( (filterValue,filterIndex) => {
                if( filterValue == 1){
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

        if (this.gamestate == GAMESTATE.PAUSED){
            return;
        } 
        if ( this.lives <= 0){
            this.gamestate =  GAMESTATE.GAMEOVER;
            return;
        }
        if ( this.currentLevelIndex == this.levels.length){
            console.log("Called");
        }
        
        this.currentLevel.forEach(brick =>{
            brick.update(deltaTime);
        });
        this.currentLevel = this.currentLevel.filter ( brick => !brick.isMarkedForDeletion);

        //Load next level:
        if (this.currentLevel.length ==0){
            this.currentLevelIndex++;

            this.ball.reset();
            this.loadNextLevel();
        }

        this.paddle.update(deltaTime);
        this.ball.update(deltaTime);
    }
    
    draw(ctx){ 
        this.paddle.draw(ctx);
        this.ball.draw(ctx);

        this.currentLevel.forEach( brick => {
            brick.draw(ctx);
        });

        if( this.gamestate == GAMESTATE.PAUSED){
            this.writeTextOnScreen('Game PAUSED',ctx);
        }

        if( this.gamestate == GAMESTATE.GAMEOVER){
            this.writeTextOnScreen(`GAMEOVER! Press 'r' to Restart`, ctx);
        }

        this.displayNumberOfLivesRemaining();

    }

    displayNumberOfLivesRemaining(){
        showLivesRemaining.innerText = this.lives;

    }

    writeTextOnScreen(text,ctx){
        // this.writeTextOnScreen(this.gamestate, 'PAUSED GAME',ctx);
        ctx.rect(0, 0, this.GAMEWIDTH, this.GAMEHEIGHT);
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fill();

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(text, this.GAMEWIDTH / 2, this.GAMEHEIGHT / 2);
        
    }

    togglePause(){
        // console.log('toggling pause');
        if( this.gamestate == GAMESTATE.RUNNING){
            this.gamestate = GAMESTATE.PAUSED;
        }else if( this.gamestate == GAMESTATE.PAUSED){
            this.gamestate = GAMESTATE.RUNNING;
        }
    }

    restartGame(){
        // console.log('restartGame called');
        if(this.gamestate == GAMESTATE.GAMEOVER){
            this.gamestate = GAMESTATE.RUNNING;
            this.lives = 3;
            this.start();
        }
    }
}