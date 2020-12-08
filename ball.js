export default class Ball{

    constructor(game){
        this.GAMEWIDTH = game.GAMEWIDTH;
        this.GAMEHEIGHT = game.GAMEHEIGHT;

        this.x = this.GAMEWIDTH/2;
        this.y = this.GAMEHEIGHT/2;
        this.r = 15; //px

        this.maxSpeed = 4;
        this.speedX = this.maxSpeed;
        this.speedY = this.maxSpeed;
        
    }

    update(deltaTime) {

        // console.log(`x:${this.x}, y:${this.y}\tMaxSpeed:${this.maxSpeed}`);
        
        if(deltaTime== undefined){
            return ; 
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