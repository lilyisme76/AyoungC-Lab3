let circleSize = 50;
let circleColor = 'lightyellow';
let circleX, circleY;

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
