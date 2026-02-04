// Selecting elements
let kelvinInput = document.getElementById("kelvin");
let celsiusInput = document.getElementById("celsius");
let fahrenheitInput = document.getElementById("fahrenheit");
let inputs = document.getElementsByTagName("input");

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", () => {
        if(inputs[i].getAttribute("id") === "celsius") {
            let celsiusValue = inputs[i].value;
            fahrenheitInput.innerText = celsiusValue(9/5) + 32;
        }
    })
}
