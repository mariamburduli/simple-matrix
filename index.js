const wrapper = document.getElementById('wrapper');


// gvchirdeba wraperi ro chavyarot rowebi
//rowebis sheqmna da funqcia, eqneba parametri ramdnei row sheqmnas// for counteris raodenobit appenchild wrappershi
//sanam row chavardeba wrapershi iqamde unda sheivsos boqsebit/ snam apenchild gaketdeba iqmade froit unda shevqmna imdeni box ramdenic minda
// da penchild rowshi



function addBoxes(row, boxCounter) {
    for (let i = 0; i < boxCounter; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        row.appendChild(box);
    }
}


addRow(3, 6);

function addRow(rowCounter, boxCounter) {
    for (let i = 0; i < rowCounter; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        addBoxes(row, boxCounter);
        wrapper.appendChild(row);
    }
}





