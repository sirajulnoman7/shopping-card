/* 
1. add event listener to the case plus button
2. get the value inside the case number field (input field)
3. convert the number to an integer
4. calculate the new case number
5. set the value to the case number field

*/
function updateCaseNumbers(isIncrease) {
    
    const getElementById=document.getElementById('case-number-field');
    const iphoneCaseValueString=getElementById.value;
    const PriviousIphoneCasePrice=parseInt(iphoneCaseValueString);
   
    let quantityUpdate;
 if(isIncrease===true){
    quantityUpdate=PriviousIphoneCasePrice + 1;
 }
 else{
    quantityUpdate=PriviousIphoneCasePrice - 1;
 }

    getElementById.value=quantityUpdate;
    return quantityUpdate;
}

function caseTotalPrice(quantityUpdate) {
    const caseTotalPrice=quantityUpdate*59;
    const casePriceElement=document.getElementById('case-total');
    casePriceElement.innerText=caseTotalPrice;
}



document.getElementById('btn-case-plus').addEventListener('click',function(){
   const quantityUpdate=updateCaseNumbers(true);
 caseTotalPrice(quantityUpdate);
 calculateSubTotal();
 
 
})
document.getElementById('btn-case-minus').addEventListener('click',function(){
 const quantityUpdate=updateCaseNumbers(false)
 caseTotalPrice(quantityUpdate);
 calculateSubTotal();

})
 
    




 
// function getSetUpdatePrice(getSet) {
// const setNewElement=document.getElementById(setNewPrice)
// const quantityUpdate=PriviousIphoneCasePrice + 1;
 
// iphoneCaseValueString.value=quantityUpdate
// }




















// function updateCaseNumber(isIncrease){
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     const previousCaseNumber = parseInt(caseNumberString);

//     let newCaseNumber;

//     if(isIncrease === true){
//         newCaseNumber = previousCaseNumber + 1;
//     }
//     else{
//         newCaseNumber = previousCaseNumber - 1;
//     }

//     caseNumberField.value = newCaseNumber;

//     return newCaseNumber;
// }

// function updateCaseTotalPrice(newCaseNumber){
//     const caseTotalPrice = newCaseNumber * 59;
//     const caseTotalElement = document.getElementById('case-total');
//     caseTotalElement.innerText = caseTotalPrice;
// } 

// document.getElementById('btn-case-plus').addEventListener('click', function(){
//     const newCaseNumber = updateCaseNumber(true);

//     updateCaseTotalPrice(newCaseNumber);
//     calculateSubTotal();
// });

// document.getElementById('btn-case-minus').addEventListener('click', function(){
//     const newCaseNumber = updateCaseNumber(false);
    
//     updateCaseTotalPrice(newCaseNumber);
//     calculateSubTotal();
// })