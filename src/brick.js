export default class Brick{
    constructor(game, position){
        this.GAMEWIDTH = game.GAMEWIDTH;
        this.GAMEHEIGHT = game.GAMEHEIGHT;

        // this.position = position;
   
        this.position = position;

        this.width = 80;
        this.height = 25;

        console.log(`brick created:{${this.position.x},${this.position.y}}`);
    }

    draw(ctx){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    }
}