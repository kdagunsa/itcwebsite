function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.conversion-section').forEach((section) => {
        section.classList.remove('active');
    });
    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}

function clearValues(inputId, outputId) {
    document.getElementById(inputId).value = "";
    document.getElementById(outputId).value = "";
}

function updateCelsius() {
    const ftemp = parseFloat(document.getElementById("ftemp").value) || 0;
    document.getElementById("sum").value = ((5 / 9) * (ftemp - 32)).toFixed(2);
}

function updateFahrenheit() {
    const ctemp = parseFloat(document.getElementById("ftemp1").value) || 0;
    document.getElementById("sum1").value = ((ctemp * 9 / 5) + 32).toFixed(2);
}

function updateFeet() {
    const meter = parseFloat(document.getElementById("meter").value) || 0;
    document.getElementById("sum2").value = (meter * 3.281).toFixed(4);
}

function updateMeters() {
    const feet = parseFloat(document.getElementById("feet").value) || 0;
    document.getElementById("sum3").value = (feet / 3.281).toFixed(4);
}
