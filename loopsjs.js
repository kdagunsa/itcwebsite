function showResult(message) {
    const resultWindow = document.getElementById("result-window");
    const resultText = document.getElementById("result");

    resultText.textContent = message; // Update result text
    resultWindow.style.display = "block"; // Show result window
}

function calculateFactorial() {
    const n = parseInt(document.getElementById("number").value);
    if (isNaN(n) || n < 0) {
        showResult("Please enter a valid non-negative integer.");
        return;
    }

    let factorial = 1;
    let i = 1;

    while (i <= n) {
        factorial *= i;
        i++;
    }

    showResult(`The factorial of ${n} is: ${factorial}`);
}

function calculateSum() {
    const n = parseInt(document.getElementById("number").value);
    if (isNaN(n) || n < 0) {
        showResult("Please enter a valid non-negative integer.");
        return;
    }

    let sum = 0;
    let i = 1;

    do {
        sum += i;
        i++;
    } while (i <= n);

    showResult(`The sum of the first ${n} natural numbers is: ${sum}`);
}

function calculateAverage() {
    const n = parseInt(document.getElementById("number").value);
    if (isNaN(n) || n <= 0) {
        showResult("Please enter a valid positive integer.");
        return;
    }

    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    const average = (sum / n).toFixed(2);

    showResult(`The average of the first ${n} natural numbers is: ${average}`);
}
