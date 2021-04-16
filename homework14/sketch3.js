var anim;
var anim_object;

function preload() {
    anim = loadStrings('movie.txt');
}

function setup() {
    createCanvas(640,480);
    anim_object = createSprite(300,300);
    anim_object.addAnimation('movie',anim[0],anim[anim.length-1]);
}

function draw() {
    background(0);

    drawSprites();
}