/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const formElement = document.getElementsByName('form');
const convertButton = document.getElementById('submit-btn');
const inputElement = document.getElementById('search');
const convertedResult = document.getElementById('output');
/*
formElement.addEventListener('submit', (event) => {
    event.preventDefault();
})
*/

const lbAmount = 2.2046;
const gAmount = 0.0010000;
const ozAmount = 35.274;


convertButton.addEventListener('click', function() {
    const lbAmount = inputElement.value;
    const kgAmount = convertToKg(lbAmount);
    convertedResult.textContent = kgAmount;
})


function convertToKg(kgAmount) {
    const result = kgAmount * lbAmount;
    console.log(result);
    return result;
}

const amountOfKg = convertToKg(5);
console.log(amountOfKg);