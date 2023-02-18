// set serial no
let serial = 0;

// selection part

const triangleBtn = document.getElementById('triangle-btn');
const rectangleBtn = document.getElementById('rectangle-btn');
const paraBtn = document.getElementById('parallelogram-btn');




// add event listener part
triangleBtn.addEventListener('click', handleTriangleCalculate);
rectangleBtn.addEventListener('click', handleRectangleCalculate);
paraBtn.addEventListener('click', handleParaCalculate);








// define function

//for triangle calculate
function handleTriangleCalculate() {
    // set serial 
    serial += 1;

    //get value
    const name = getInnerTextById('triangle-name');
    const base = getInputValueById('triangle-base');
    const height = getInputValueById('triangle-height');

    // validation
    if (base === 0 || height === 0) {
        return;
    };

    // area calculate
    const triangleArea = areaCalculate('triangle', base, height);

    // reset input value 
    setInputValueById('triangle-base', '');
    setInputValueById('triangle-height', '');

    // display result in ui
    displayResult(serial, name, triangleArea);
}

// for rectangle calculate
function handleRectangleCalculate() {
    // set serial 
    serial += 1;

    //get value
    const name = getInnerTextById('rectangle-name');
    const width = getInputValueById('rectangle-width');
    const length = getInputValueById('rectangle-length');

    // validation
    if (width === 0 || length === 0) {
        return;
    };

    // area calculate
    const rectangleArea = areaCalculate('rectangle', width, length);

    // reset input value 
    setInputValueById('rectangle-width', '');
    setInputValueById('rectangle-length', '');

    // display result in ui
    displayResult(serial, name, rectangleArea);
}

// parallelogram area calculate

function handleParaCalculate() {
    // set serial 
    serial += 1;

    //get value
    const name = getInnerTextById('parallelogram-name');
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');

    // validation
    if (base === 0 || height === 0) {
        return;
    };

    // area calculate
    const parallelogramArea = areaCalculate('parallelogram', base, height);

    // reset input value 
    setInputValueById('parallelogram-base', '');
    setInputValueById('parallelogram-height', '');

    // display result in ui
    displayResult(serial, name, parallelogramArea);
}