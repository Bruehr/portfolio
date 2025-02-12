function calculate() {
    "use strict";

    // Clear error messages
    document.getElementById("Operand1Error").innerHTML = "";
    document.getElementById("Operand2Error").innerHTML = "";
    document.getElementById("OperatorError").innerHTML = "";
    document.getElementById("Result").innerHTML = "";

    let errorflag = false;

    // Get and validate the first operand
    let operand1 = document.getElementById("Operand1").value;
    if (operand1 === "" || isNaN(operand1)) {
        document.getElementById("Operand1Error").innerHTML = "Operand 1 is required and must be a number";
        errorflag = true;
    }

    // Get and validate the second operand
    let operand2 = document.getElementById("Operand2").value;
    if (operand2 === "" || isNaN(operand2)) {
        document.getElementById("Operand2Error").innerHTML = "Operand 2 is required and must be a number";
        errorflag = true;
    }

    // Stop execution if there are errors
    if (errorflag) {
        return;
    }

    // Convert operands to numbers
    let operand1fp = parseFloat(operand1);
    let operand2fp = parseFloat(operand2);

    // Ensure an operator is selected
    let operator;
    if (document.getElementById("AddOperator").checked) {
        operator = "+";
    } else if (document.getElementById("SubtractOperator").checked) {
        operator = "-";
    } else if (document.getElementById("MultiplyOperator").checked) {
        operator = "*";
    } else if (document.getElementById("DivideOperator").checked) {
        operator = "/";
    } else {
        document.getElementById("OperatorError").innerHTML = "Operator is required";
        return;
    }

    // Perform calculation
    let result;
    if (operator === "+") {
        result = operand1fp + operand2fp;
    } else if (operator === "-") {
        result = operand1fp - operand2fp;
    } else if (operator === "*") {
        result = operand1fp * operand2fp;
    } else if (operator === "/") {
        if (operand2fp === 0) {
            document.getElementById("OperatorError").innerHTML = "Cannot divide by zero";
            return;
        }
        result = operand1fp / operand2fp;
    }

    // Display result
    document.getElementById("Result").innerHTML = result.toString();
}

function clearform() {
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand2").value = "";
    document.getElementById("Operand1Error").innerHTML = "";
    document.getElementById("Operand2Error").innerHTML = "";
    document.getElementById("OperatorError").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
    document.getElementById("AddOperator").checked = false;
    document.getElementById("SubtractOperator").checked = false;
    document.getElementById("MultiplyOperator").checked = false;
    document.getElementById("DivideOperator").checked = false;
}
