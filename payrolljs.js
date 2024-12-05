let employeeList = [];

function addEmployee() {
    const name = document.getElementById("name").value;
    const daysWorked = parseInt(document.getElementById("days").value);
    const dailyRate = parseFloat(document.getElementById("rate").value);
    const deduction = parseFloat(document.getElementById("deduction").value);

    if (!name || isNaN(daysWorked) || isNaN(dailyRate) || isNaN(deduction)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    const grossPay = daysWorked * dailyRate;
    const netPay = grossPay - deduction;

    employeeList.push({ name, daysWorked, dailyRate, grossPay, deduction, netPay });
    updateTable();
    clearForm();
}

function deleteEmployee(index) {
    employeeList.splice(index, 1);
    updateTable();
}

function updateTable() {
    const tableBody = document.querySelector("#payroll-table tbody");
    tableBody.innerHTML = ""; // Clear existing rows

    employeeList.forEach((employee, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.daysWorked}</td>
            <td>₱${employee.dailyRate.toFixed(2)}</td>
            <td>₱${employee.grossPay.toFixed(2)}</td>
            <td>₱${employee.deduction.toFixed(2)}</td>
            <td>₱${employee.netPay.toFixed(2)}</td>
            <td><button onclick="deleteEmployee(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("days").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("deduction").value = "";
}
