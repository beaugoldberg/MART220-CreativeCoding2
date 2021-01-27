var iteration = 0;

// Colors 
var col1, col2, col3, col4, col5, col6, col7, col8, col9, col10;

// Shapes
var c1x, c1y, c1d; // Circle 1
var c2x, c2y, c2d; // Circle 2
var c3x, c3y, c3d; // Circle 3
var s1x, s1y, s1w; // Square 1
var s2x, s2y, s2w; // Square 2
var s3x, s3y, s3w; // Square 3
var r11, r12, r13, r14; // Rectangle 1
var r21, r22, r23, r24; // Rectangle 2
var t11x, t11y, t12x, t12y, t13x, t13y; // Triangle 1
var t21x, t21y, t22x, t22y, t23x, t23y; // Triangle 2

// Images & Their Positions
var bird, frog, chicken;
var birdx = 100, birdy = 100;
var frogx = 300, frogy = 300;
var chickx = 450, chicky = 450;
var birdXspeed = 1, birdYspeed = 1;
var frogXspeed = 1, frogYspeed = 1;
var chickXspeed = 1, chickYspeed = 1;

// Font & Timer
let myFont;
var timer = 0;

function preload() {
  bird = loadImage('assets/bird.png');
  frog = loadImage('assets/frog.png');
  chicken = loadImage('assets/chicken.png');
  myFont = loadFont('assets/Adagio.ttf');
}

function setup() {
    createCanvas(600,600);
    setInterval(updateFunction, 1000);
}

function draw()
{
    // Instantiate background and border
    background(0);
    drawBorder(10);
    drawShapes()
    
    // Draw Images
    image(bird, birdx, birdy);
    image(frog, frogx, frogy);
    image(chicken, chickx, chicky);

    // Name
    textFont(myFont);
    fill('white');
    textSize(24);
    text("Random Shapes",20,40);
    text("Beau Goldberg",365,580);
    textFont('Arial');
    text("Time: " + timer, 480, 40);

    iteration++;
    birdx += birdXspeed; birdy -= birdYspeed;
    frogx -= frogXspeed; frogy += frogYspeed;
    chickx += chickXspeed; chicky += chickYspeed;

    if (birdx > 500 || birdx < 20) { birdXspeed *= -1}
    if (birdy > 500 || birdy < 20) { birdYspeed *= -1}
    if (frogx > 500 || frogx < 20) { frogXspeed *= -1}
    if (frogy > 500 || frogy < 20) { frogYspeed *= -1}
    if (chickx > 500 || chickx < 20) { chickXspeed *= -1}
    if (chicky > 500 || chicky < 20) { chickYspeed *= -1}
}

function mouseClicked()
{
    mousex = mouseX;
    mousey = mouseY;
}

function drawBorder(borderSize)
{
    fill("blue");
    rect(0,0,600,borderSize);
    rect(0,0,borderSize,600);
    rect(590,0,borderSize,600);
    rect(0,590,600,borderSize);
}

function drawShapes()
{
    if (iteration % 1000 == 0) {
        col1 = getRandomColor(); col2 = getRandomColor(); col3 = getRandomColor(); col4 = getRandomColor(); col5 = getRandomColor(); 
        col6 = getRandomColor(); col7 = getRandomColor(); col8 = getRandomColor(); col9 = getRandomColor(); col10 = getRandomColor(); 

        fill(col1); 
        c1x = random(50,550); c1y = random(50,550); c1d = random(20,50);
        circle(c1x,c1y,c1d);

        fill(col2);
         c2x = random(50,550); c2y = random(50,550); c2d = random(20,50);
        circle(c2x,c2y,c2d);

        fill(col3); 
        c3x = random(50,550); c3y = random(50,550); c3d = random(20,50);
        circle(c3x,c3y,c3d);

        fill(col4); 
        s1x = random(50,550); s1y = random(50,550); s1w = random(20,50);
        square(s1x,s1y,s1w);

        fill(col5);
        s2x = random(50,550); s2y = random(50,550);s2w = random(20,50);
        square(s2x,s2y,s2w);

        fill(col6);
        s3x = random(50,550); s3y = random(50,550); s3w = random(20,50);
        square(s3x,s3y,s3w);

        fill(col7);
        r11 = random(50,550); r12 = random(50,550); r13 = random(20,50); r14 = random(20,50);
        rect(r11,r12,r13,r14);

        fill(col8);
        r21 = random(50,550); r22 = random(50,550); r23 = random(20,50); r24 = random(20,50);
        rect(r21,r22,r23,r24);

        fill(col9);
        t11x = random(50,550); t11y = random(50,550); t12x = random(50,550); t12y = random(50,550); t13x = random(50,550); t13y = random(50,550);
        triangle(t11x,t11y,t12x,t12y,t13x,t13y);

        fill(col10);
        t21x = random(50,550); t21y = random(50,550); t22x = random(50,550); t22y = random(50,550); t23x = random(50,550); t23y = random(50,550);
        triangle(t21x,t21y,t22x,t22y,t23x,t23y);
    }
    else {
        fill(col1);
        circle(c1x,c1y,c1d);

        fill(col2);
        circle(c2x,c2y,c2d);

        fill(col3);
        circle(c3x,c3y,c3d);

        fill(col4);
        square(s1x,s1y,s1w);

        fill(col5);
        square(s2x,s2y,s2w);

        fill(col6);
        square(s3x,s3y,s3w);

        fill(col7);
        rect(r11,r12,r13,r14);

        fill(col8);
        rect(r21,r22,r23,r24);

        fill(col9);
        triangle(t11x,t11y,t12x,t12y,t13x,t13y);

        fill(col10);
        triangle(t21x,t21y,t22x,t22y,t23x,t23y);
    }
}

function getRandomColor() { return "#" + Math.floor(Math.random()*16777215).toString(16); }

function updateFunction() {
    timer++;
    if (timer % 5 == 0) {
        birdXspeed = random(1,15); birdYspeed = random(1,15);
        frogXspeed = random(1,15); frogYspeed = random(1,15);
        chickXspeed = random(1,15); chickYspeed = random(1,15);
    }
}
