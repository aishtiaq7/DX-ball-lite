const GAMESTATE = {
    NEWLEVEL:0,
    MENU:1,
    RUNNING:2, // done
    PAUSED:3,  //done
    GAMEOVER:4,
}

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

                case 32: //Pause Toggle
                    game.togglePause();
                    break;
                case 114:
                    // console.log(`pressed:${event.key}`);
                    game.restartGame();
                    break;
                case 82:
                    // console.log(`pressed:${event.key}`);
                    game.restartGame();
                    break;

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