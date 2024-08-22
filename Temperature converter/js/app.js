const degreeInput = document.getElementById('degree');
const convertButton = document.getElementById('convert');
const resultValue = document.getElementById('value');
const tempTypeSelect = document.getElementById('temp-type');
const inputFahrenheit = document.getElementById('input-fahrenheit');
const inputCelsius = document.getElementById('input-celsius');

function convertTemperature() {
    const degree = parseFloat(degreeInput.value);
    const convertTo = tempTypeSelect.value;
    let result;

    if (inputFahrenheit.checked) {
        if (convertTo === 'celsius') {
            result = (degree - 32) * 5/9;
        } else if (convertTo === 'kelvin') {
            result = (degree - 32) * 5/9 + 273.15;
        } else {
            result = degree;
        }
    } else if (inputCelsius.checked) {
        if (convertTo === 'fahrenheit') {
            result = (degree * 9/5) + 32;
        } else if (convertTo === 'kelvin') {
            result = degree + 273.15;
        } else {
            result = degree;
        }
    }

    resultValue.textContent = result.toFixed(2);
    degreeInput.value = '';
}

convertButton.addEventListener('click', convertTemperature);
