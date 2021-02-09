var flatboy;
var idle = []; 
var walk = [];
var walk_reverse = [];
var jump = [];
var objects = [];
var idleObjects = []; 
var walkObjects = [];
var walkReverseObjects = [];
var jumpObjects = [];
var extraObjects = [];
var objectsX = [50,50,0];
var objectsY = [410,510,-20];
var idle_animations; 
var walk_animations;
var walkReverse_animations;
var jump_animations;
var obstacles;
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
    obstacles = loadStrings('files/extra.txt');
}

// create the canvas
function setup() {
    createCanvas(800,800);
    for (var i = 0; i < idle_animations.length; i++)  {
        idleObjects.push(new character('assets/' + idle_animations[i],0,0));
        walkObjects.push(new character('assets/' + walk_animations[i],0,0));
        walkReverseObjects.push(new character('assets/' + walkReverse_animations[i],-310,0));
        jumpObjects.push(new character('assets/' + jump_animations[i],0,0));
        idle[i] = idleObjects[i].getImage();
        walk[i] = walkObjects[i].getImage();
        walk_reverse[i] = walkReverseObjects[i].getImage();
        jump[i] = jumpObjects[i].getImage();
    }
    for (var i = 0; i < obstacles.length; i++) {
        extraObjects.push(new character('assets/' + obstacles[i], objectsX[i], objectsY[i]));
        objects[i] = extraObjects[i].getImage();
    }
    setInterval(incrementIndex, 50);

}

// display all the frames using the draw function as a loop
function draw() {

    background(120);
    for (var j = 0; j < extraObjects.length; j++) {
        image(objects[j], extraObjects[j].getX(), extraObjects[j].getY());
    }
    [curAnimation, curAnimationObjects, i] = animationContoller(curAnimation,curAnimationObjects, i);
    // draw each frame based on the index in the array
    image(curAnimation[i], curAnimationObjects[i].getX(), curAnimationObjects[i].getY());
}

function incrementIndex()
{
    // increment the index
    
    if (curAnimation == walk) {
        console.log(i);
        if (i == 0) { x = curAnimationObjects[14].getX(); }
        else { x = curAnimationObjects[i].setX(curAnimationObjects[i-1].getX()); }

        curAnimationObjects[i].setX(x + 1 * (i+1));
        walkReverseObjects[i].setX(x - 300);
    }
    else if (curAnimation == walk_reverse) {
        if (i == 0) { x = curAnimationObjects[14].getX(); }
        else { x = curAnimationObjects[i].setX(curAnimationObjects[i-1].getX()); }

        curAnimationObjects[i].setX(x - 1 * (i+1));
        walkObjects[i].setX(x + 300);
    }
    i += 1;

    // if we reach the end of the array, start over
    if (i >= curAnimation.length - 1) {
        i = 0;
    }
}

function animationContoller(curAnimation, curAnimationObjects, i) {
    // Player Movement
    if (keyIsDown(65)) { 
        curAnimation = walk_reverse; 
        curAnimationObjects = walkReverseObjects; 
        i = 0; 
    } // A left
    if (keyIsDown(68)) { 
        curAnimation = walk; 
        curAnimationObjects = walkObjects; 
        i = 0; 
    } // D right
    if (keyIsDown(87)) { 
        
        if (curAnimationObjects == walkReverseObjects) { x = curAnimationObjects[i].getX() + 300; }
        else { x = curAnimationObjects[i].getX(); }
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