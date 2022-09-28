
function getIncriseFieldValue(isIncrease) {
    const inputFieldElement = document.getElementById('phone-number-field');
    const phoneInputFieldString = inputFieldElement.value;
    const phoneInputFieldValue = parseInt(phoneInputFieldString);
    let phoneNumberFieldIncrise;

    if (isIncrease === true) {
        phoneNumberFieldIncrise = phoneInputFieldValue + 1;
    }
    else {
        phoneNumberFieldIncrise = phoneInputFieldValue - 1;
    }

    inputFieldElement.value = phoneNumberFieldIncrise;

    return phoneNumberFieldIncrise;

}
function getPreviousPhonePrice(phoneNumberFieldIncrise) {
    const previousPhoneElement = document.getElementById('phone-total');
    const phoneTotalPrice = phoneNumberFieldIncrise * 1219;
    previousPhoneElement.innerText = phoneTotalPrice;

}



document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const phoneNumberFieldIncrise = getIncriseFieldValue(true);
    const totalPhonePrice = getPreviousPhonePrice(phoneNumberFieldIncrise);
    // step-4
    calculateSubTotal();



})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const phoneNumberFieldIncrise = getIncriseFieldValue(false);
    const totalPhonePrice = getPreviousPhonePrice(phoneNumberFieldIncrise);
    calculateSubTotal();

})