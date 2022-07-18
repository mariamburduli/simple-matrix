const wrapper = document.getElementById('wrapper');


function addBoxes(row, boxCounter) {
    for(let i = 0; i < boxCounter; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        row.appendChild(box);
    }
}


addRow(22, 22);
function addRow(rowCounter, boxCounter) {
    for(let i = 0; i < rowCounter; i ++) {
        let row = document.createElement('div');
        row.classList.add('row');
        addBoxes(row, boxCounter);
        wrapper.appendChild(row);
    }
}

