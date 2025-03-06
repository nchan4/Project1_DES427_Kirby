let img;
let newImg;
let offset = 0;
let scaleDiv = 8;
let newScaleDiv = 4;
let clickCount = 0;
let showText = false;
let kirbySound;
let showInitialText = true;


function preload() {
img = loadImage('kirby2.png'); 
newImg = loadImage('kirby.png');
kirbySound = loadSound('poyo.mp3');

}

function setup() {
  createCanvas(400, 400);

}

function draw(){
  background('lightblue');
  if (clickCount >= 3) {
    image(newImg, 140 + offset, 2 - offset, newImg.width / newScaleDiv, newImg.height / newScaleDiv);
  } else {
image(img, 130 + offset, 2 - offset, img.width / scaleDiv, img.height / scaleDiv);
  }
  
if (showInitialText) {
text('Click on Kirby', 10, 30);
textFont('Helvetica');
textSize(15);

text('to say hi!',10,50);
textFont('Helvetica');
textSize(15);
}

if (showText) {
  textStyle(BOLD);
  textFont('Helvetica');
  textSize(30);
  text('POYO! (Hi)', 80, 100);

}

}

function mousePressed(){
  let imgX = 130 + offset;
  let imgY = 2 - offset;
  let imgWidth = img.width / scaleDiv;
  let imgHeight = img.height / scaleDiv;

  if (mouseX >= imgX && mouseX <= imgX + imgWidth && mouseY >= imgY && mouseY <= imgY + imgHeight) {
    kirbySound.play();

  scaleDiv = scaleDiv - 2;
  offset = offset - 40;
clickCount++;

if (clickCount >= 3) {
  showText = true;
}
if (clickCount >= 3) {
  img = newImg;
}
showInitialText = false;

}
}






