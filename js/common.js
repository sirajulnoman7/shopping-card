// function getPhoneTotalElement(elementById) {
//     const previousPhoneTotalElement = document.getElementById(elementById);
//     const previousPhoneTotalString = previousPhoneTotalElement.innerText;
//     const previousPhoneTotalPrice = parseInt(previousPhoneTotalString);
//     console.log(previousPhoneTotalPrice);
//     return previousPhoneTotalPrice;

// }
// function setTextElementValueById( elementId ,value){
//     const setSubTotalElement = document.getElementById(value);
//     setSubTotalElement.innerText = value;
// }
// function calculateSubTotal(){
//     const phoneTotal = getPhoneTotalElement('phone-total');
//     const caseTotal = getPhoneTotalElement('case-total');
//     const subTotalPrice = phoneTotal + caseTotal;
//     setTextElementValueById('sub-total',subTotalPrice);
//     calculateSubTotal();
// }


function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {
    // calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);

    //     // calculate tax
    //     const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    //     const taxAmount = parseFloat(taxAmountString);
    //     setTextElementValueById('tax-amount', taxAmount);

    //     const finalAmount = currentSubTotal + taxAmount;
    //     setTextElementValueById('final-total', finalAmount);
}