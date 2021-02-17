var characterObjects;
var idle, walk, walk_rv,jump; 
var i = 0;
var x = 0;

// Bring in all the assets from our folder
function preload() {
    idle = loadStrings('files/idle.txt');
    walk = loadStrings('files/walk.txt');
    walk_rv = loadStrings('files/walk_reverse.txt');
    jump = loadStrings('files/jump.txt');
}

// create the canvas
function setup() {
    createCanvas(1800,800);
    characterObjects = createSprite(550,580);
    characterObjects.addAnimation('idle', idle[0], idle[idle.length-1]);
    characterObjects.addAnimation('walk', walk[0], walk[walk.length-1]);
    characterObjects.addAnimation('walk_rv', walk_rv[0], walk_rv[walk_rv.length-1]);
    characterObjects.addAnimation('jump',jump[0],jump[jump.length-1]);
    
    cat = createSprite(100,680);
    branches = createSprite(1400,100);
    cat.addImage(loadImage('assets/extra (1).png'));
    branches.addImage(loadImage('assets/extra (2).png'));
}

// display all the frames using the draw function as a loop
function draw() {

    background(120);
    textSize(36);
    text('Exit -->', 1600, 300);
    
    if (keyDown('a')) { 
        characterObjects.changeAnimation('walk_rv'); 
        characterObjects.velocity.x -= .2;
        if(characterObjects.collide(cat) || characterObjects.collide(branches))  {
            characterObjects.changeAnimation('idle');
        }
    }
    else if (keyDown('d')) { 
        characterObjects.changeAnimation('walk'); 
        characterObjects.velocity.x += .2;
        if(characterObjects.collide(cat) || characterObjects.collide(branches))  {
            characterObjects.changeAnimation('idle');
        }
    }
    else if (keyDown('w')) {
        characterObjects.changeAnimation('jump');
        characterObjects.velocity.y -= .1;
        if(characterObjects.collide(cat) || characterObjects.collide(branches))  {
            characterObjects.changeAnimation('idle');
        }
    }
    else if (keyDown('s')) {
        characterObjects.velocity.y += .1;
        if(characterObjects.collide(cat) || characterObjects.collide(branches))  {
            characterObjects.changeAnimation('idle');
        }
    }
    else { 
        characterObjects.changeAnimation('idle'); 
        characterObjects.velocity.x = 0;
        characterObjects.velocity.y = 0;
    }

    if (characterObjects.position.x - 300 >= 1800) {
        textSize(40);
        text('You Win!!', 800, 100);
    }

    characterObjects.debug = mouseIsPressed;
    branches.debug = mouseIsPressed;
    cat.debug = mouseIsPressed;
    drawSprites();
}
