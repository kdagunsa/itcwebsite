function calculateTax() {
    // Retrieve the input value for taxable income
    const income = parseFloat(document.getElementById("income").value) || 0;
    let tax = 0;

    // Tax calculation based on the provided brackets
    if (income <= 250000) {
        tax = 0; // No tax for income <= 250,000
    } else if (income <= 400000) {
        tax = (income - 250000) * 0.20;
    } else if (income <= 800000) {
        tax = 30000 + (income - 400000) * 0.25;
    } else if (income <= 2000000) {
        tax = 130000 + (income - 800000) * 0.30;
    } else if (income <= 8000000) {
        tax = 490000 + (income - 2000000) * 0.32;
    } else {
        tax = 2410000 + (income - 8000000) * 0.35;
    }

    // Display the tax result
    document.getElementById("result").textContent = `Your income tax is: ₱${tax.toFixed(2)}`;
}
