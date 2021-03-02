var x = 0;
var y = 0;
var radius = 5;

function setup() {
    createCanvas(800,800, WEBGL);
}

function draw() {
    background(255);

    ambientLight(255,0,0);
    normalMaterial();

    push();
    translate(-200,-100);
    rotateX(frameCount * 0.01);
    torus(30,10,24,16);
    pop();

    push();
    translate(0,-100);
    rotateY(frameCount * 0.01);
    torus(30,10,24,16);
    pop();

    push();
    rotate(Math.PI/2, [1,0,0]);
    translate(-100,0,0);
    rotateY(frameCount * 0.01);
    cone(30,100);
    pop();

    push();
    translate(-160,100);
    rotate(Math.PI/8, [0,0,1]);
    rotateX(frameCount * 0.01);
    box(120,20,20,4,4);
    pop();

    push();
    translate(-40,100);
    rotate(-Math.PI/8, [0,0,1]);
    rotateX(-frameCount * 0.01);
    box(120,20,20,4,4);
    pop();

    push();
    translate(x, y);
    sphere(radius);
    pop();

    if (keyIsPressed) {
        if (key == 'a') { x -= 5; }
        else if (key == 'd') { x += 5; }
        else if (key == 'w') { y -= 5; }
        else if (key == 's') { y += 5; }
        else if (keyCode == LEFT_ARROW) { if (radius > 3) { radius -= 1; }}
        else if (keyCode == RIGHT_ARROW) { if (radius < 20) { radius += 1; }}
    }
}
