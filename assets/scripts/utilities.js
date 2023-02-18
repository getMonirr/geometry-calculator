// get input value 
function getInputValueById(id) {
    const inputValue = parseInt(document.getElementById(id).value);
    if (inputValue === '' || inputValue <= 0 || isNaN(inputValue)) {
        alert(`Please input only positive number.`);
        return 0;
    }
    return inputValue;
}
// get inner text
function getInnerTextById(id) {
    return document.getElementById(id).innerText;
}
// set input value
function setInputValueById(id, value) {
    const targetInput = document.getElementById(id);
    targetInput.value = value;
}

// triangle area calculate

function areaCalculate(type, base, height) {
    if (type === 'triangle' || type === 'rhombus' || type === 'pentagon') {
        return (0.5 * base * height).toFixed(2);
    }
    if (type === 'ellipse') {
        return (Math.PI * base * height).toFixed(2);
    }

    return (base * height).toFixed(2);
}

// display result in ui
function displayResult(serial, name, area) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}.${name}</td>
    <td>${area}cm<sup>2</sup></td>
     <td>
     <button 
     id="convert-cm-m" 
     class="py-1 px-2 bg-blue-500 text-white rounded-md">
     Convert to m<sup>2</sup>
    </button>
    </td>
    <td><a id="remove" href="#">X</a></td>
    `;
    const resultContainer = document.getElementById('result-container');
    resultContainer.appendChild(tr);
}