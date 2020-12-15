import * as BrickCollision from './brickCollision.js';

export default class Brick{
    constructor(game, position){
        this.GAMEWIDTH = game.GAMEWIDTH;
        this.GAMEHEIGHT = game.GAMEHEIGHT;

        // this.position = position;

        this.game = game;
   
        this.position = position;

        this.width = 80;
        this.height = 25;

        // console.log(`brick created:{${this.position.x},${this.position.y}}`);
    }

    update(deltaTime){
        // ************** COLLISION BETWEEN BALL - BRICK  **************
        switch( BrickCollision.ballCollidesBrick(this.game.ball,this) ){
            case 'left':
                // code block
                console.log('LEFT');
                break;
            case 'right':
                console.log('RIGHT');
                break;
            case 'top':
                console.log('TOP')
                break;
            case 'bottom': 
                // code block
                break;
            default:
                throw new Error('Unpected return from function ballCollidesBrick(...)');
        }



    }

    draw(ctx){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    }
}