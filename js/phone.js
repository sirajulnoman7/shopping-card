// function updatePhoneNumber(isIncrease){
//     const phoneNumberField=document.getElementById('phone-number-field');
//     const phoneNumberString=phoneNumberField.value;
//     const previousPhoneNumber=parseInt(phoneNumberString);

//     let newPhoneNumber;
//     if(isIncrease){
//         phoneNumberField.value=previousPhoneNumber+1;

//      }
//     else{
//         phoneNumberField.value=previousPhoneNumber-1;

//     }
//     phoneNumberField.value=newPhoneNumber;
//     return newPhoneNumber;


// }

// function updatePhoneTotalPrice(newPhoneNumber){
//     const phoneTotalPrice = newPhoneNumber * 1219;
//     const phoneTotalElement = document.getElementById('phone-total');
//     phoneTotalElement.innerText = phoneTotalPrice;
// }



// document.getElementById('btn-phone-plus').addEventListener('click', function(){
//    updatePhoneNumber(true);
//    updateCaseTotalPrice();


// });
// document.getElementById('btn-phone-minus').addEventListener('click', function(){
//     updatePhoneNumber(false);
//     updateCaseTotalPrice(newPhoneNumber);

// })




function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;

    if (isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}

// function getSetSubTotal(elementById, subTotal) {

// // }



document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    const updateTotal = updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();









});

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);

    // const phoneTotal = getPhoneTotalElement('phone-total');
    // const caseTotal = getPhoneTotalElement('case-total');
    // const subTotalPrice = phoneTotal + caseTotal;
    // const setSubTotalElement = document.getElementById('sub-total');
    // setSubTotalElement.innerText = subTotalPrice;
    // console.log(subTotalPrice);
    calculateSubTotal();
})