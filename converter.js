"use strict";

console.log("hello worlds");

let tempInput = document.getElementById("temp-input");
let celcius = document.getElementById("Celcius");
let fahrenheit = document.getElementById("Fahrenheit");
let addBtn = document.getElementById("btn-temp");
let rmvBtn = document.getElementById("btn-remove");
let txtArea = document.getElementById("temp-result");

tempInput.addEventListener("keypress", function(event) {
  if (event.keyCode === 13 && celcius.checked === true) {
    event.preventDefault();
    toCelsius();
    console.log("celcius works", tempInput.value);
  }else if (event.keyCode === 13 && fahrenheit.checked === true){
    event.preventDefault();
    toFahrenheit();
    console.log("fahrenheit works");
  }
});

addBtn.addEventListener("click", function(event){
  if (celcius.checked === true){
    event.preventDefault();
    toCelsius();
  }else if (fahrenheit.checked === true){
    event.preventDefault();
    toFahrenheit();
  }
});

rmvBtn.addEventListener("click", function(event){
  txtArea.style.display = "none";
})


function toCelsius () {
  var celcOutPUt = (tempInput.value - 32) * 5 / 9;
  txtArea.innerHTML = `<p>Celcius Temperature = </p><h1>${celcOutPUt}</h1>`; 
  if(celcOutPUt > 32){
    txtArea.style.color = "red";
  }else if(celcOutPUt < 0){
    txtArea.style.color = "blue";
  }else if(celcOutPUt <= 32 && celcOutPUt >= 0){
    txtArea.style.color = "green";
  }
}

function toFahrenheit () {
  var fahrOutPut = tempInput.value * 1.8 + 32;
  txtArea.innerHTML = `<p>Fahrenheit Temperature = </p><h1>${fahrOutPut}</h1>`;
  if(fahrOutPut > 90){
    txtArea.style.color = "red";
  }else if(fahrOutPut < 32){
    txtArea.style.color = "blue";
  }else if(fahrOutPut <= 90 && fahrOutPut >= 32){
    txtArea.style.color = "green";
  }
}



// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
//button.addEventListener("click", determineConverter);