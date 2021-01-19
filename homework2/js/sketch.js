var iteration = 0;
var col1, col2, col3, col4, col5, col6, col7, col8, col9, col10;
var c1x, c1y, c1d, c2x, c2y, c2d, c3x, c3y, c3d;
var s1x, s1y, s1w, s2x, s2y, s2w, s3x, s3y, s3w;
var r11, r12, r13, r14, r21, r22, r23, r24;
var t11x, t11y, t12x, t12y, t13x, t13y;
var t21x, t21y, t22x, t22y, t23x, t23y;

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

    iteration++;
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
    if (iteration % 1000 == 0) {
        col1 = getRandomColor(); col2 = getRandomColor(); col3 = getRandomColor(); col4 = getRandomColor(); col5 = getRandomColor(); 
        col6 = getRandomColor(); col7 = getRandomColor(); col8 = getRandomColor(); col9 = getRandomColor(); col10 = getRandomColor(); 

        fill(col1);
        c1x = getRandomNumber(370) + 15; c1y = getRandomNumber(370) + 15; c1d = getRandomNumber(20) + 10;
        circle(c1x,c1y,c1d);

        fill(col2);
        c2x = getRandomNumber(370) + 15; c2y = getRandomNumber(370) + 15; c2d = getRandomNumber(20) + 10;
        circle(c2x,c2y,c2d);

        fill(col3);
        c3x = getRandomNumber(370) + 15; c3y = getRandomNumber(370) + 15; c3d = getRandomNumber(20) + 10;
        circle(c3x,c3y,c3d);

        fill(col4);
        s1x = getRandomNumber(370) + 15; s1y = getRandomNumber(370) + 15; s1w = getRandomNumber(20) + 10;
        square(s1x,s1y,s1w);

        fill(col5);
        s2x = getRandomNumber(370) + 15; s2y = getRandomNumber(370) + 15; s2w = getRandomNumber(20) + 10;
        square(s2x,s2y,s2w);

        fill(col6);
        s3x = getRandomNumber(370) + 15; s3y = getRandomNumber(370) + 15; s3w = getRandomNumber(20) + 10;
        square(s3x,s3y,s3w);

        fill(col7);
        r11 = getRandomNumber(370) + 15; r12 = getRandomNumber(470) + 25; r13 = getRandomNumber(50) + 10; r14 = getRandomNumber(50) + 10;
        rect(r11,r12,r13,r14);

        fill(col8);
        r21 = getRandomNumber(370) + 15; r22 = getRandomNumber(470) + 25; r23 = getRandomNumber(50) + 10; r24 = getRandomNumber(50) + 10;
        rect(r21,r22,r23,r24);

        fill(col9);
        t11x = getRandomNumber(370) + 15; t11y = getRandomNumber(370) + 15; t12x = getRandomNumber(370) + 15; t12y = getRandomNumber(370) + 15; t13x = getRandomNumber(370) + 15; t13y = getRandomNumber(370) + 15;
        triangle(t11x,t11y,t12x,t12y,t13x,t13y);

        fill(col10);
        t21x = getRandomNumber(370) + 15; t21y = getRandomNumber(370) + 15; t22x = getRandomNumber(370) + 15; t22y = getRandomNumber(370) + 15; t23x = getRandomNumber(370) + 15; t23y = getRandomNumber(370) + 15;
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

function getRandomNumber(number) { return Math.floor(Math.random()*number); }