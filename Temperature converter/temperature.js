// Selecting elements
let kelvinInput = document.getElementById("kelvin");
let celsiusInput = document.getElementById("celsius");
let fahrenheitInput = document.getElementById("fahrenheit");
let inputs = document.getElementsByTagName("input");
let celsiusResult = document.getElementById("celsius-result");
let fahrenheitResult = document.getElementById("fahrenheit-result");
let kelvinResult = document.getElementById("kelvin-result");

for (let i = 0; i < inputs.length; i++) {
    // let inputsValue = inputs[i].value;
    inputs[i].addEventListener("change", () => {
        if(inputs[i].getAttribute("id") === "celsius") {
            let celsiusValue = Number(inputs[i].value);
            celsiusResult.innerHTML = `Celsius: ${celsiusValue} \u2103`
            fahrenheitResult.innerHTML = `Fahrenheit: ${celsiusValue * (9/5) + 32} \u2109`
            kelvinResult.innerHTML = `Kelvin: ${celsiusValue + 273.15} K `;
        } else if (inputs[i].getAttribute("id") === "fahrenheit") {
            let fahrenheitValue = Number(inputs[i].value);
            celsiusResult.innerHTML = `Celsius: ${(fahrenheitValue-32) * (5/9)} \u2103`
            fahrenheitResult.innerHTML = `Fahrenheit: ${fahrenheitValue} \u2109`
            kelvinResult.innerHTML = `Kelvin: ${(fahrenheitValue-32) * (5/9) + 273.15} K `;
        } else if (inputs[i].getAttribute("id") === "kelvin") {
             let kelvinValue = Number(inputs[i].value);
            celsiusResult.innerHTML = `Celsius: ${kelvinValue - 273.15} \u2103`
            fahrenheitResult.innerHTML = `Fahrenheit: ${(kelvinValue-273.15) * (9/5) + 32} \u2109`
            kelvinResult.innerHTML = `Kelvin: ${kelvinValue} K `;
        }
    })
}
