export default class Paddle {

    constructor(gameWidth, gameHeight){
        this.GAMEWIDTH = gameWidth;
        this.GAMEHIEGHT = gameHeight;

        this.width = 150;
        this.height = 30;

        this.position ={
            x: gameWidth /2 - this.width/2,
            y: gameHeight -this.height -10
        }

        this.maxSpeed = 7;
        this.speed = 0;
    }

    draw(ctx) {
        ctx.fillStyle = 'purple';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
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