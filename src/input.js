

export default class InputHandler{

    constructor(paddle,game){
        document.addEventListener('keydown', event=>{
            // console.log(event.keyCode);
            switch (event.keyCode) {
                case 39 ://right arrow
                    paddle.moveRight();
                    break;
                case 37 ://left arrow
                    paddle.moveLeft();
                    break;

                case 32: //SPACEBAR
                    game.togglePause();
            
                default:
                    break;
            }
        });

        document.addEventListener('keyup', event=>{
            // console.log(event.keyCode);
            switch (event.keyCode) {
                case 39 ://right arrow
                    if(paddle.speed > 0)
                        paddle.stop();
                    break;
                case 37 ://left arrow
                    if(paddle.speed < 0)
                        paddle.stop();
                    break;
            
                default:
                    break;
            }
        });
    }
}