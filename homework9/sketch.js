let house;
let t1, t2, t3, t4, t5;
let font;

var satelliteX = 0;
var curtainX = 110;
var curtainY = 30;
var curtainZ = 150;

function preload() {
  house = loadModel('assets/House.obj', true);
  t1 = loadImage('assets/text1.jpg');
  t2 = loadImage('assets/text2.jpg');
  t3 = loadImage('assets/text3.jpg');
  t4 = loadImage('assets/text4.jpg');
  t5 = loadImage('assets/text5.jpg');
  font = loadFont('assets/avo-font.otf');

}

function setup() {
  createCanvas(700, 600, WEBGL);
}

function draw() {
  background(200);
  normalMaterial();

  push();
  scale(1.5);
  rotateX(Math.PI - Math.PI/32);
  rotateY(Math.PI - Math.PI/16);
  model(house);
  pop();

  // Shape 1
  push();
  translate(-180,70,30);
  rotateY(frameCount * 0.05);
  texture(t2);
  cylinder(20,100);
  pop();

  // Shape 2
  push();
  translate(200,80,100);
  rotateY(frameCount * 0.05);
  texture(t1);
  box(30);
  pop();

  // Shape 3
  push();
  translate(38,40,130);
  rotateX(frameCount * 0.01);
  texture(t4);
  torus(10,3);
  pop();

  // Shape 4
  push();
  translate(curtainX,curtainY,curtainZ);
  rotateX(frameCount * 0.1);
  texture(t5);
  box(40,30,10);
  pop();

  // Shape 5
  push();
  translate(satelliteX,-80,100);
  rotateZ(frameCount * 0.01);
  rotateX(Math.PI/3)
  texture(t3);
  cone(40, 70);
  pop();

  textSize(34);
  textFont(font);
  fill(0);
  text("Your average neighborhood home! by Beau Goldberg",-310,-230);

}

function mouseClicked() {
  if (satelliteX == 0) { satelliteX = -70; }
  else { satelliteX = 0; }

  if (curtainX == 110) { curtainX = -70; }
  else { curtainX = 110; }
}