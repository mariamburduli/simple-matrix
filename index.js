const wrapper = document.getElementById('wrapper');


function addBoxes(row, boxCounter) {
    const boxes = []
    for (let i = 0; i < boxCounter; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        boxes.push(box);
    }
    row.append(...boxes);
}

function drawMatrix(rowCounter, boxCounter) {
    wrapper.innerHTML = '';
    const rows = [];
    for (let i = 0; i < rowCounter; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        addBoxes(row, boxCounter);

        rows.push(row);
    }

    wrapper.append(...rows)
}

function activate(element) {
    element.classList.add('active');
}

drawMatrix(10, 10);

let firstBox = document.querySelectorAll('#wrapper .row .box:first-child');
for (let i = 0; i < firstBox.length; i++) {
    activate(firstBox[i]);
}
let secBox = firstBox.parentElement.nextSibling.firstChild;
activate(secBox)
let lastBos = secBox.parentElement.parentElement.lastChild.firstChild;
activate(lastBos)




let thirdBox = document.querySelector('#wrapper .row:nth-child(2) .box:nth-child(2)');
activate(thirdBox);

let lastBox = thirdBox.parentElement.lastChild;
activate(lastBox);

let lastRow = lastBox.parentElement.parentElement.lastChild;


for (let i = 0; i < lastRow.childNodes.length; i++) {
    activate(lastRow.childNodes[i]);
}










