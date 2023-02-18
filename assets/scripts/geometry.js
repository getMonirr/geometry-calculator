// set serial no
let serial = 0;

// selection part

const triangleCalcBtn = document.getElementById('triangle-btn');
const rectangleCalcBtn = document.getElementById('rectangle-btn');
const paraCalcBtn = document.getElementById('parallelogram-btn');
const rhombusCalcBtn = document.getElementById('rhombus-btn');
const pentagonCalcBtn = document.getElementById('pentagon-btn');
const ellipseCalcBtn = document.getElementById('ellipse-btn');

const cards = document.querySelectorAll('.card');
const blogPageBtn = document.getElementById('blog-page')

const resultContainer = document.getElementById('result-container');
// const convertCmToM = document.getElementById('convert-cm-m');

// add event listener part
triangleCalcBtn.addEventListener('click', handleTriangleCalculate);
rectangleCalcBtn.addEventListener('click', handleRectangleCalculate);
paraCalcBtn.addEventListener('click', handleParaCalculate);
rhombusCalcBtn.addEventListener('click',handleRhombusCalculate);
pentagonCalcBtn.addEventListener('click',handlePentagonCalculate);
ellipseCalcBtn.addEventListener('click',handleEllipseCalculate);

resultContainer.addEventListener('click',handleCmToM);

// for random color
cards.forEach(function(card) {
    card.addEventListener('mouseenter',function(){
        card.style.backgroundColor = randomColor();
    })
})

// go to blog page
blogPageBtn.addEventListener('click',goToBlogPage);







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
// rhombus area calculate

function handleRhombusCalculate() {
    // set serial 
    serial += 1;

    //get value
    const name = getInnerTextById('rhombus-name');
    const d1 = getInputValueById('rhombus-d1');
    const d2 = getInputValueById('rhombus-d2');

    // validation
    if (d1 === 0 || d2 === 0) {
        return;
    };

    // area calculate
    const rhombusArea = areaCalculate('rhombus', d1, d2);

    // reset input value 
    setInputValueById('rhombus-d1', '');
    setInputValueById('rhombus-d2', '');

    // display result in ui
    displayResult(serial, name, rhombusArea);
}

// pentagon area calculate

function handlePentagonCalculate() {
    // set serial 
    serial += 1;

    //get value
    const name = getInnerTextById('pentagon-name');
    const p = getInputValueById('pentagon-p');
    const base = getInputValueById('pentagon-base');

    // validation
    if (p === 0 || base === 0) {
        return;
    };

    // area calculate
    const pentagonArea = areaCalculate('pentagon', p, base);

    // reset input value 
    setInputValueById('pentagon-p', '');
    setInputValueById('pentagon-base', '');

    // display result in ui
    displayResult(serial, name, pentagonArea);
}
// ellipse area calculate

function handleEllipseCalculate() {
    // set serial 
    serial += 1;

    //get value
    const name = getInnerTextById('ellipse-name');
    const a = getInputValueById('ellipse-a');
    const b = getInputValueById('ellipse-b');

    // validation
    if (a === 0 || b === 0) {
        return;
    };

    // area calculate
    const ellipseArea = areaCalculate('ellipse', a, b);

    // reset input value 
    setInputValueById('ellipse-a', '');
    setInputValueById('ellipse-b', '');

    // display result in ui
    displayResult(serial, name, ellipseArea);
}



// go to Blog page
function goToBlogPage(){
    window.location.href = 'blog.html';
}

// convert cm to m
function handleCmToM(e){
    if(!e.target.hasAttribute('id')){
        return;
    };
    if(e.target.id === 'convert-cm-m'){
        // const targetId = e.target.parentNode.previousElementSibling.children[0].id;
    }else{
        e.target.parentNode.parentNode.remove();
    }
}