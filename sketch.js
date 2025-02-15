let circleSize = 50;
let circleColor = 'lightyellow';
let circleX, circleY;
let userName = "";

function setup() {
    createCanvas(400, 400);
    circleX = width / 2;
    circleY = height / 2;
    setupGUI();
}

function draw() {
    background(220);
    
   
    fill(circleColor);
    ellipse(circleX, circleY, circleSize);


    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(userName, circleX, circleY - circleSize / 2 - 10);
}

function mousePressed() {
    circleX = mouseX;
    circleY = mouseY;
}

function keyPressed() {
    if (key === 'r') {
        circleSize = 50; 
        sizeSlider.value(50); 
    }
}
