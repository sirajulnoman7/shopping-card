// step-4
function subTotalPrice(phoneAndCase) {
    const previousPhoneTotalElement = document.getElementById(phoneAndCase);
    const previousPhoneTotalString = previousPhoneTotalElement.innerText;
    const previousPhoneTotalPrice = parseInt(previousPhoneTotalString);
    return previousPhoneTotalPrice;
}
function calculateSubTotal() {
    const phoneSubTotal = subTotalPrice('phone-total');
    const caseSubTotal = subTotalPrice('case-total');
    const subTotalAmount = phoneSubTotal + caseSubTotal;
    console.log(subTotalAmount)

    // set subTotal 
    const previousSubTotal = document.getElementById('sub-total');
    const setSubTotal = previousSubTotal.innerText = subTotalAmount
    const multipitationString = (setSubTotal * 0.10).toFixed(2);
    const MultiplayTax = parseFloat(multipitationString);
    // setp-12 
    const tax = document.getElementById('tax-amount');
    tax.innerText = MultiplayTax;
    const finalTotal = subTotalAmount + MultiplayTax;
    const finalAmount = document.getElementById('final-total');
    finalAmount.innerText = finalTotal;



}