// Select display and all buttons
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = '';
let firstValue = '';
let shouldReset = false;

// Add click event listeners to all buttons
function handleNumber(value) {
    if (shouldReset) {
        currentInput = '';
        shouldReset = false;
    }
    currentInput += value;
    display.value = currentInput;
}

function handleOperator(value) {
    operator = value;
    firstValue = currentInput;
    currentInput = '';
}

function handleEquals() {
    if (operator && firstValue && currentInput) {
        let result = eval(`${firstValue}${operator}${currentInput}`);
        display.value = result;
        currentInput = result;
        shouldReset = true;
    }
}

function handleClear() {
    currentInput = '';
    firstValue = '';
    operator = '';
    display.value = '0';
}

function handleBackspace() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput || '0';
}

function handleDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.value = currentInput;
    }
}

function handlePercent() {
    if (currentInput) {
        currentInput = (parseFloat(currentInput) / 100).toString();
        display.textContent = currentInput;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            handleNumber(button.textContent);
        } else if (button.classList.contains('operator')) {
            handleOperator(button.textContent);
        } else if (button.id === 'equals') {
            handleEquals();
        } else if (button.id === 'clear') {
            handleClear();
        } else if (button.id === 'backspace') {
            handleBackspace();
        } else if (button.id === 'decimal') {
            handleDecimal();
        } else if (button.id === 'percent') {
            handlePercent();
        }
    });
});

// calclulator

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
function percentage(a, b) {
    return (a * b) / 100;
}

function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result;

    try {
        switch (operation) {
            case "+":
                result = add(num1, num2);
                break;
            case "-":
                result = subtract(num1, num2);
                break;
            case "*":
                result = multiply(num1, num2);
                break;
            case "/":
                result = divide(num1, num2);
                break;
            case "%":
                result = percentage(num1, num2);
                break;
            default:
                throw new Error("Invalid operation");
        }
        document.getElementById("result").innerText = `Result: ${result}`;
    } catch (error) {
        document.getElementById("result").innerText = `Error: ${error.message}`;
    }
}