var characterObjects;
var idle, walk, walk_rv,jump; 
var i = 0;
var x = 0;
var cat, branches;
let particles = [];
var healthCat = 50; 
var healthBranches = 50;

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
    branches = createSprite(1500,660);
    cat.addImage(loadImage('assets/extra (1).png'));
    branches.addImage(loadImage('assets/extra (2).png'));
}

// display all the frames using the draw function as a loop
function draw() {

    background(120);
    
    if (keyDown('a')) { 
        characterObjects.changeAnimation('walk_rv'); 
        characterObjects.velocity.x -= .2;
        if (cat != null) {
            if(characterObjects.collide(cat))  { characterObjects.changeAnimation('idle');}
        }
        if (branches != null) {
            if(characterObjects.collide(branches))  { characterObjects.changeAnimation('idle'); }
        }
    }
    else if (keyDown('d')) { 
        characterObjects.changeAnimation('walk'); 
        characterObjects.velocity.x += .2;
        if (cat != null) {
            if(characterObjects.collide(cat))  { characterObjects.changeAnimation('idle');}
        }
        if (branches != null) {
            if(characterObjects.collide(branches))  { characterObjects.changeAnimation('idle'); }
        }
    }
    else if (keyDown('w')) {
        characterObjects.velocity.y -= .1;
        if (cat != null) {
            if(characterObjects.collide(cat))  { characterObjects.changeAnimation('idle');}
        }
        if (branches != null) {
            if(characterObjects.collide(branches))  { characterObjects.changeAnimation('idle'); }
        }
    }
    else if (keyDown('s')) {
        characterObjects.velocity.y += .1;
        if (cat != null) {
            if(characterObjects.collide(cat))  { characterObjects.changeAnimation('idle');}
        }
        if (branches != null) {
            if(characterObjects.collide(branches))  { characterObjects.changeAnimation('idle'); }
        }
    }
    else if (keyDown('x')) {
        characterObjects.changeAnimation('jump');
        if (cat != null) {
            if(dist(characterObjects.position.x,characterObjects.position.y,cat.position.x,cat.position.y) < 520) {
                createParticles(cat.position.x,cat.position.y);
                healthCat -= 1;
                if (healthCat <= 0) {
                    cat.remove();
                    cat = null;
                }
            }
        }
        if (branches != null) {
            if(dist(characterObjects.position.x,characterObjects.position.y,branches.position.x,branches.position.y) < 650)
            {
                createParticles(branches.position.x, branches.position.y);
                healthBranches -= 1;
                if (healthBranches <= 0) {
                    branches.remove();
                    branches = null;
                }
            }
        }
    }
    else { 
        characterObjects.changeAnimation('idle'); 
        characterObjects.velocity.x = 0;
        characterObjects.velocity.y = 0;
    }

    if (branches == null && cat == null) {
        textSize(40);
        text('You Win!!', 800, 100);
    }

    characterObjects.debug = mouseIsPressed;
    drawSprites();
}

function createParticles(x,y) {
    for (let i = 0; i < 5;i++) {
        let p = new Particle(x,y);
        particles.push(p);
    }
    for (let i = particles.length - 1; i>= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) { particles.splice(i,1); }
    }
}

