/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//DOM
const inputEl = document.getElementById("input");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function () {
  renderLength();
  renderVolume();
  renderMass();
  console.log(inputEl.value);
});

function renderLength() {
  let x = `${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(
    3
  )} feet | ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(
    3
  )} meters`;
  lengthEl.textContent = x;
}
function renderVolume() {
  let x = `${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(
    3
  )} gallons | ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(
    3
  )} liters`;
  volumeEl.textContent = x;
}
function renderMass() {
  let x = `${inputEl.value} kilos = ${(inputEl.value * 2.204).toFixed(
    3
  )} pounds | ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(
    3
  )} kilos`;
  massEl.textContent = x;
}
