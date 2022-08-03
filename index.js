/* With an extra push for clearing the input feild on clicking convert btn */

let inputVal = document.getElementById("input-num");
let lengthVal = document.getElementById("length-conversion");
let volumeVal = document.getElementById("volume-conversion");
let massVal = document.getElementById("mass-conversion");
let btn = document.getElementById("convert-btn");

function conversions(){
    let feets = `${inputVal.value}`*3.28084;
    let meters = `${inputVal.value}` / 3.28084;
    let gallons = `${inputVal.value}` * 0.264172;
    let litres = `${inputVal.value}` * 3.785411784;
    let pounds = `${inputVal.value}` * 2.2;
    let kilograms = `${inputVal.value}` * 0.453592;
    
    lengthVal.textContent = `${inputVal.value} meters = ${feets.toFixed(3)} feets | ${inputVal.value} feets = ${meters.toFixed(3)} meters`;
    volumeVal.textContent = `${inputVal.value} litres = ${gallons.toFixed(3)} gallons | ${inputVal.value} gallons = ${litres.toFixed(3)} litres`;
    massVal.textContent = `${inputVal.value} kilograms = ${pounds.toFixed(3)} pounds | ${inputVal.value} pounds = ${kilograms.toFixed(3)} kilograms`;

    inputVal.value = "";
}
