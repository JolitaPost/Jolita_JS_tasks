/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const form = document.getElementById('converter-form');
const kgInput = document.getElementById('search');
const output = document.getElementById('output');
const toSelect = document.getElementById('toSelect');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const toValue = toSelect.value;
    const convertedValue = converter(toValue);
    output.textContent = convertedValue;
 });

 const converter = (to) => {
    const kg = Number(kgInput.value);  
    if (to === 'lb') {
        return `${kg}kg = ` + kg * 2.2046 + ` lb`;
    } else if (to === 'g') {
        return `${kg}kg = ` + kg / 0.0010000 + ` g`;
    } else if (to === 'oz') {
        return `${kg}kg = ` + kg * 35.274 + ` oz`;
    }
 }