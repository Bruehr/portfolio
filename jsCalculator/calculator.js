function calculate() {
    "use strict";

    // Clear any error or output messages
    document.getElementById("Operand1Error").innerHTML = "";
    document.getElementById("Operand2Error").innerHTML = "";
    document.getElementById("OperatorError").innerHTML = "";
    document.getElementById("Result").innerHTML = "";

    let errorflag = false;

    // Get Operand 1
    let operand1 = document.getElementById("Operand1").value;
    if (operand1 === "" || isNaN(operand1)) {
        document.getElementById("Operand1Error").innerHTML = "Operand 1 is required and must be a number";
        errorflag = true;
    }

    // Get Operand 2
    let operand2 = document.getElementById("Operand2").value;
    if (operand2 === "" || isNaN(operand2)) {
        document.getElementById("Operand2Error").innerHTML = "Operand 2 is required and must be a number";
        errorflag = true;
    }

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
        errorflag = true;
    }

    if (!errorflag) {
        let operand1fp = parseFloat(operand1);
        let operand2fp = parseFloat(operand2);
        let result;

        switch (operator) {
            case "+":
                result = operand1fp + operand2fp;
                break;
            case "-":
                result = operand1fp - operand2fp;
                break;
            case "*":
                result = operand1fp * operand2fp;
                break;
            case "/":
                if (operand2fp === 0) {
                    document.getElementById("OperatorError").innerHTML = "Cannot divide by zero";
                    return;
                }
                result = operand1fp / operand2fp;
                break;
        }
        document.getElementById("Result").innerHTML = result.toString();
    }
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
