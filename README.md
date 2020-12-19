# DX-ball-lite

Game objective
    Using left and right arrow keys and with 3 lives only, you can move the paddle in the bottom to
    of the screen to rebound the constantly moving ball to pop all the bricks in each level to win!


DX-ball-lite is implemented using pure Vanilla Javascrip, CSS and HTML ( without any framworks).
Core concepts in JS include: 
    -Object oriented programming and Classes
    -Game logic & UI separation
    -ES6 syntaxes
    -InputHandlers
    -Dynamic Game Feature properties(No hard coated values)
    -Expor/Import modules

Game mechanices:
    -game.js handles all the game logic and is responsible to maintain & update the canvas/UI
    -ball, brick & paddle has its own class to maintain OOP and its properties
    -index.html is the entry point to play the game. 
    -input.js is a class to handle all user inputs
    -collision.js class handles all the calculations for paddle and ball collisions
    -levels.js,brickCollision.js are self-explanatory classes. 