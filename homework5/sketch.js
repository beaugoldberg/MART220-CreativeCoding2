var flatboy;
var idle = []; 
var walk = [];
var walk_reverse = [];
var jump = [];
var idleObjects = []; 
var walkObjects = [];
var walkReverseObjects = [];
var jumpObjects = [];
var extraObjects = [];
var idle_animations; 
var walk_animations;
var walkReverse_animations;
var jump_animations;
var extra_images;
var curAnimation = idle;
var curAnimationObjects = idleObjects;
var i = 0;
var x = 0;

// Bring in all the assets from our folder
function preload() {
    idle_animations = loadStrings('files/idle.txt');
    walk_animations = loadStrings('files/walk.txt');
    walkReverse_animations = loadStrings('files/walk_reverse.txt');
    jump_animations = loadStrings('files/jump.txt');
    extra_images = loadStrings('files/extra.txt');
}

// create the canvas
function setup() {
    createCanvas(800,800);
    for (var i = 0; i < idle_animations.length; i++)  {
        idleObjects.push(new character('assets/' + idle_animations[i],0,0));
        walkObjects.push(new character('assets/' + walk_animations[i],0,0));
        walkReverseObjects.push(new character('assets/' + walkReverse_animations[i],-300,0));
        jumpObjects.push(new character('assets/' + jump_animations[i],0,0));
        extraObjects.push(new character('assets/' + extra_images[i], random(300), random(300)))
        idle[i] = idleObjects[i].getImage();
        walk[i] = walkObjects[i].getImage();
        walk_reverse[i] = walkReverseObjects[i].getImage();
        jump[i] = jumpObjects[i].getImage();
    }
    setInterval(incrementIndex, 50);

}

// display all the frames using the draw function as a loop
function draw() {

    background(0);

    [curAnimation, curAnimationObjects, i] = animationContoller(curAnimation,curAnimationObjects, i);
    // draw each frame based on the index in the array
    image(curAnimation[i], curAnimationObjects[i].getX(), curAnimationObjects[i].getY());
    for (var i = 0; i < extraObjects.length; i++) {
        image(extraObjects[i].getImage(), extraObjects[i].getX(), extraObjects[i].getY());
    }
}

function incrementIndex()
{
    // increment the index
    //i += 1;
    if (curAnimation == walk) {
        curAnimationObjects[i].setX(curAnimationObjects[i].getX() + 10);
    }
    else if (curAnimation == walk_reverse) {
        curAnimationObjects[i].setX(curAnimationObjects[i].getX() - 10);
    }
    i += 1;

    // if we reach the end of the array, start over
    if (i >= curAnimation.length-1) {
        i = 0;
    }
}

function animationContoller(curAnimation, curAnimationObjects, i) {
    // Player Movement
    if (keyIsDown(65)) { 
        x = curAnimationObjects[i].getX();
        curAnimation = walk_reverse; 
        curAnimationObjects = walkReverseObjects; 
        for (var i = 0; i < curAnimationObjects.length; i++) {
            curAnimationObjects[i].setX(x);
        }
        i = 0; 
    } // A left
    if (keyIsDown(68)) { 
        x = curAnimationObjects[i].getX();
        curAnimation = walk; 
        curAnimationObjects = walkObjects; 
        for (var i = 0; i < curAnimationObjects.length; i++) {
            curAnimationObjects[i].setX(x);
        }
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