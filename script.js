let sizeSlider, colorRadio, nameInput;

function setupGUI() {

    sizeSlider = select("#sizeSlider");
    sizeSlider.input(updateSize);


    colorRadio = createRadio();
    colorRadio.option('Lightyellow', 'lightyellow');
    colorRadio.option('Skyblue', 'skyblue');
    colorRadio.option('Orange', 'orange');
    colorRadio.selected('lightyellow'); // 초기 색상
    colorRadio.parent("#colorRadio");
    colorRadio.changed(updateColor);


    nameInput = select("#nameInput");
    nameInput.input(updateName);
}

function updateSize() {
    circleSize = sizeSlider.value();
}

function updateColor() {
    circleColor = colorRadio.value();
}

function updateName() {
    userName = nameInput.value();
}
