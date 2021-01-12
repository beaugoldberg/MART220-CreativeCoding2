var shapes = 0;

function setup()
{
    createCanvas(400,400);
}

function draw()
{
    // Instantiate background and border
    background(0);
    drawBorder(10);
    drawShapes()
    
    // Name
    fill('white');
    textSize(16);
    text("Beau Goldberg",275,380);

    // Title
    fill('white');
    textSize(16);
    text("Random Shapes",16,30);

}

function mouseClicked()
{
    mousex = mouseX;
    mousey = mouseY;
}

function drawBorder(borderSize)
{
    fill("blue");
    rect(0,0,400,borderSize);
    rect(0,0,borderSize,400);
    rect(390,0,borderSize,400);
    rect(0,390,400,borderSize);
}

function drawShapes()
{
    fill('pink');
    circle(100,65,30);
    fill('green');
    circle(30,72,16);
    fill('orange');
    circle(198,152,22);
    fill('magenta');
    square(216,312,17);
    fill('red');
    square(326,124,24);
    fill('yellow');
    square(86,332,34);
    fill('cyan');
    rect(156,372,80,10,);
    fill('red');
    rect(310,186,32,160);
    fill('orange');
    triangle(60, 175, 28, 120, 82, 175);
    fill('blue');
    triangle(130, 275, 28, 300, 217, 82);
}

function getRandomNumber(number)
{
    return Math.floor(Math.random()*number);
}