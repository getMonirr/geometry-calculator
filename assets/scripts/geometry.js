// set serial no
let serial = 0;

// selection part

const triangleBtn = document.getElementById('triangle-btn');




// add event listener part
triangleBtn.addEventListener('click', handleTriangleCalculate);







// define function

function handleTriangleCalculate() {
    // set serial 
    serial += 1;

    //get value
    const name = getInnerTextById('triangle-name');
    const base = getInputValueById('triangle-base');
    const height = getInputValueById('triangle-height');

    // validation
    if(base === 0 || height === 0){
        return;
    }
    // area calculate
    const triangleArea = areaCalculate('triangle', base, height);

    // display result in ui
    displayResult(serial,name,triangleArea);
}