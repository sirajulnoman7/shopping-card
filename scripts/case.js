
function getIncriseFieldValueCase(isIncrease) {
    const inputFieldCaseElement = document.getElementById('case-number-field');
    const caseFieldValueString = inputFieldCaseElement.value;
    const caseFieldNumber = parseInt(caseFieldValueString);
    let newCasenumber;
    if (isIncrease === true) {
        newCasenumber = caseFieldNumber + 1;
    }
    else {
        newCasenumber = caseFieldNumber - 1;
    }
    inputFieldCaseElement.value = newCasenumber;
    return newCasenumber;

}

function setTotalElementPrice(newCasenumber) {
    const previousCaseTotalElement = document.getElementById('case-total');
    const totalCasePrice = newCasenumber * 59;
    previousCaseTotalElement.innerText = totalCasePrice;
}


document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCasenumber = getIncriseFieldValueCase(true);
    const newCasePrice = setTotalElementPrice(newCasenumber);
    calculateSubTotal();

})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCasenumber = getIncriseFieldValueCase(false);
    const newCasePrice = setTotalElementPrice(newCasenumber);
    calculateSubTotal();

})


