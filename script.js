function convertTemperature() {
    var inputTemp = document.getElementById("inputTemp").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var resultContainer = document.getElementById("result");
    var result;

    if (inputUnit === "celsius") {
        // Convert Celsius to Fahrenheit
        result = (inputTemp * 9/5) + 32;
        resultContainer.innerHTML = inputTemp + " Celsius = " + result.toFixed(2) + " Fahrenheit";
    } else if (inputUnit === "fahrenheit") {
        // Convert Fahrenheit to Celsius
        result = (inputTemp - 32) * 5/9;
        resultContainer.innerHTML = inputTemp + " Fahrenheit = " + result.toFixed(2) + " Celsius";
    } else {
        resultContainer.innerHTML = "Invalid unit";
    }
}
