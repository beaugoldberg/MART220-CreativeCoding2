var flatboy;
var idle = [];
var idleObjects = [];
var walk = [];
var walkObjects = [];
var jump = [];
var jumpObjects = [];
var curAnimation = idle;
var curAnimationObjects = idleObjects;
var direction = 'still';
var i = 0;
var x = 0;

// Bring in all the assets from our folder
function preload() {

    // Idle Movements
    for (var i = 1; i < 16; i++) {
        flatboy = new character('assets/Idle (' + i + ').png', 0, 200);
        idleObjects[i-1] = flatboy
        idle[i-1] = flatboy.getImage();
    }

    // Walk Movements
    for (var i = 1; i < 16; i++) {
        flatboy = new character('assets/Walk (' + i + ').png', 0, 200);
        walkObjects[i-1] = flatboy
        walk[i-1] = flatboy.getImage();
    }

    // Jump Movements
    for (var i = 1; i < 16; i++) {
        flatboy = new character('assets/Jump (' + i + ').png', 0, 200);
        jumpObjects[i-1] = flatboy
        jump[i-1] = flatboy.getImage();
    }
}

// create the canvas
function setup() {

    createCanvas(800,800);
    setInterval(incrementIndex, 50);
}

// display all the frames using the draw function as a loop
function draw() {

    background(0);

    [curAnimation, curAnimationObjects, i] = animationContoller(curAnimation,curAnimationObjects, i);
    // draw each frame based on the index in the array
    image(curAnimation[i], curAnimationObjects[i].getX(), curAnimationObjects[i].getY());
}

function incrementIndex()
{
     // increment the index
    if (curAnimation == walk && direction == 'right') {
        curAnimationObjects[i].setX(x += 5);
    }
    else if (curAnimation == walk && direction == 'left') {
        curAnimationObjects[i].setX(x -= 5);
    }
    i += 1;

     // if we reach the end of the array, start over
     if (i >= curAnimation.length) {
         i = 0;
     }
}

function animationContoller(curAnimation, curAnimationObjects, i)
{
    // Player Movement
    if (keyIsDown(65)) { 
        curAnimation = walk; 
        direction = 'left';
        curAnimationObjects = walkObjects; 
        i = 0;
    } // A left
    if (keyIsDown(68)) { 
        curAnimation = walk; 
        direction = 'right';
        curAnimationObjects = walkObjects; 
        i = 0;
    } // D right
    if (keyIsDown(87)) { 
        x = curAnimationObjects[i].getX();
        curAnimation = idle; 
        curAnimationObjects = idleObjects; 
        for (var i = 0; i < curAnimationObjects.length; i++) {
            curAnimationObjects[i].setX(x);
        }
        i = 0; 
    } // W up
    if (keyIsDown(88)) { 
        x = curAnimationObjects[i].getX();
        curAnimation = jump; 
        curAnimationObjects = jumpObjects; 
        for (var i = 0; i < curAnimationObjects.length; i++) {
            curAnimationObjects[i].setX(x);
        }
        i = 0; 
    } // X key

    return [curAnimation, curAnimationObjects, i];
}