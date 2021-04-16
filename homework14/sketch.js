function setup() {
    let img = createImage(800, 600); // same as new p5.Image(800, 600);
    img.loadPixels();
    createCanvas(800, 600);
    background(0);
  
    // helper for writing color to array
    function writeColor(image, x, y, red, green, blue, alpha) 
    {
      let index = (x + y * width) * 4;
      image.pixels[index] = red;
      image.pixels[index + 1] = green;
      image.pixels[index + 2] = blue;
      image.pixels[index + 3] = alpha;
    }
  
    // this function draws random squares within squares on the canvas
    function drawShapes(number1, number2) {
      let startX = floor(random(number1-10)) + 10;
      let startY = floor(random(number2-20)) + 20;
      console.log(startX);
      // draw shapes
      for (x = startX; x < startX + floor(random(400)); x++) {
        for (y = startY; y < startY + floor(random(400)); y++) {
          if (x > startX + 10 && x < startX + 25 && y > startY + 10 && y < startY + 25) {
            writeColor(img, x, y, 50, 100, 50, floor(random(255)));
          } else {
            writeColor(img, x, y, 55, 20, 125, floor(random(255)));
          }
        }
      }
    }
  
    let x, y;
    // fill with random colors
    for (y = 0; y < img.height; y++) {
      for (x = 0; x < img.width; x++) {
        let red = random(255);
        let green = random(255);
        let blue = random(255);
        let alpha = 255;
        writeColor(img, x, y, red, green, blue, alpha);
      }
    }
  
    // draw upper border line
    for(y = 0; y < 5; y++)
    {
      for (x = 0; x < img.width; x++) 
      {
        writeColor(img, x, y, 255, 255, 0, 255);
      }
    }
  
    // draw a bottom border line
    y = img.height - 1;
    for(let i = 0; i < 5; i++)
    {
      for (x = 0; x < img.width; x++) 
      {
        writeColor(img, x, y, 255, 255, 0, 255);
      }
      y--;
    }

    // draw left border line
    for(y = 0; y < 5; y++)
    {
      for (x = 0; x < img.height; x++) 
      {
        writeColor(img, y, x, 255, 255, 0, 255);
      }
    }

    // draw right border line
    y = img.width - 1;
    for(let i = 0; i < 5; i++)
    {
      for (x = 0; x < img.height; x++) 
      {
        writeColor(img, y, x, 255, 255, 0, 255);
      }
      y--;
    }

    // Initials
    let initialX;
    let initialY;

    // Top B
    for (x = 710; x < 740; x++) {
      for (y = 550; y < 555; y++ ) {
        writeColor(img, x, y, 255, 255, 255, 255);
      }
    }
    // Bottom B
    for (x = 710; x < 740; x++) {
      for (y = 585; y < 590; y++ ) {
        writeColor(img, x, y, 255, 255, 255, 255);
      }
    }
    // Middle B
    for (x = 710; x < 740; x++) {
      for (y = 568; y < 573; y++ ) {
        writeColor(img, x, y, 255, 255, 255, 255);
      }
    }
    // Left B
    for (y = 550; y < 590; y++) {
      for (x = 710; x < 715; x++) {
        writeColor(img, x, y, 255, 255, 255, 255);
      }
    }
    // Right B
    for (y = 550; y < 590; y++) {
      for (x = 735; x < 740; x++) {
        writeColor(img, x, y, 255, 255, 255, 255);
      }
    }
    // Top G
    for (x = 745; x < 775; x++) {
      for (y = 550; y < 555; y++ ) {
        writeColor(img, x, y, 255, 255, 255, 255);
      }
    }
    // Bottom G
    for (x = 745; x < 775; x++) {
      for (y = 585; y < 590; y++ ) {
        writeColor(img, x, y, 255, 255, 255, 255);
      }
    }
    // Left G
    for (y = 550; y < 590; y++) {
      for (x = 745; x < 750; x++) {
        writeColor(img, x, y, 255, 255, 255, 255);
      }
    }
    // Right G
    for (y = 570; y < 590; y++) {
      for (x = 770; x < 775; x++) {
        writeColor(img, x, y, 255, 255, 255, 255);
      }
    }
    // Middle G
    for (y = 570; y < 575; y++) {
      for (x = 760; x < 775; x++) {
        writeColor(img, x, y, 255, 255, 255, 255);
      }
    }
     

    
  
    // draw shapes
    for (var i = 0; i < 50; i++) {
      drawShapes(floor(random(width)), floor(random(height)));
    }
  
    img.updatePixels();
    image(img, 0, 0);
  }