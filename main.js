
//DOM variables
let convertBtn = document.getElementById('convert-btn')
let input = document.getElementById('input')
const lengthMtoF = document.getElementById('lengthMtoF')
const lengthFtoM = document.getElementById('lengthFtoM')
const weightKtoL = document.getElementById('weightKtoL')
const weightLtoK = document.getElementById('weightLtoK')
const volumeLtoG = document.getElementById('volumeLtoG')
const volumeGtoL = document.getElementById('volumeGtoL')
let value = input.value


//Metric measurements
const meterToFeet = 3.28
const literToGallon = 0.26
const kiloToPound = 2.20




function limit(input) {
    let max_chars = 5;
         
    if(input.value.length > max_chars) {
        input.value = input.value.substr(0, max_chars);
    }
}

//Button that performs conversion
convertBtn.addEventListener('click', () => {
    
    lengthMtoF.textContent = `${input.value} meters = ${(input.value * meterToFeet).toFixed(2)} feet`
    lengthFtoM.textContent = `${input.value} feet = ${(input.value / meterToFeet).toFixed(2)} meters`
    weightKtoL.textContent = `${input.value} kgs = ${(input.value * kiloToPound).toFixed(2)} lbs`
    weightLtoK.textContent = `${input.value} lbs = ${(input.value / kiloToPound).toFixed(2)} kgs`
    volumeGtoL.textContent = `${input.value} gallons = ${(input.value / literToGallon).toFixed(2)} liters`
    volumeLtoG.textContent = `${input.value} liters = ${(input.value * literToGallon).toFixed(2)} gallons`
   
})
