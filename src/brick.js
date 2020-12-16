import * as BrickCollision from './brickCollision.js';

export default class Brick{
    constructor(game, position){
        this.GAMEWIDTH = game.GAMEWIDTH;
        this.GAMEHEIGHT = game.GAMEHEIGHT;

        
        this.game = game;
   
        this.position = position;

        this.x = this.position.x;
        this.y = this.position.y;

        this.width = 80;
        this.height = 25;

        this.isMarkedForDeletion = false;
        // console.log(`brick created:{${this.position.x},${this.position.y}}`);
    }

    update(deltaTime){
        // ************** COLLISION BETWEEN BALL - BRICK  **************
        switch( BrickCollision.ballCollidesBrick(this.game.ball,this) ){
            case 'left':
                // code block
                // console.log('LEFT');
                this.isMarkedForDeletion = true;
                this.game.ball.speedX = this.game.ball.speedX *-1;
                break;
            case 'right':
                this.isMarkedForDeletion = true;
                // console.log('RIGHT');
                this.game.ball.speedX = this.game.ball.speedX *-1;
                break;
            case 'top':
                // console.log('TOP');
                this.isMarkedForDeletion = true;
                this.game.ball.speedY = this.game.ball.speedY *-1;
                break;
            case 'bottom': 
                // console.log('BOTTOM');
                this.isMarkedForDeletion = true;
                this.game.ball.speedY = this.game.ball.speedY *-1;
                break;
            case 'noHit':
                // console.log('NOHIT');
                break;
            default:
                throw new Error('Unpected return from function ballCollidesBrick(...)');
        }



    }

    draw(ctx){
        // if( this.isMarkedForDeletion )
        ctx.fillStyle = 'green';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    }
}