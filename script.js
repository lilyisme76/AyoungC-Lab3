let sizeSlider, colorRadio;

function setupGUI() {

    sizeSlider = select("#sizeSlider");
    sizeSlider.input(updateSize);

    
    colorRadio = createRadio();
    colorRadio.option('Lightyellow', 'lightyellow');
    colorRadio.option('Orange', 'orange');
    colorRadio.option('SkyBlue', 'skyblue');
    colorRadio.selected('lightyellow'); 
    colorRadio.parent("#colorRadio");

    colorRadio.changed(updateColor);
}

function updateSize() {
    circleSize = sizeSlider.value();
}

function updateColor() {
    circleColor = colorRadio.value();
}
