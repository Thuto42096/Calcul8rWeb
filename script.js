// Select display and all buttons
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = '';
let firstValue = '';
let shouldReset = false;

// Add click event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.classList.contains('btnnumber')) {
            if (shouldReset) {
                currentInput = '';
                shouldReset = false;
            }
            currentInput += value;
            display.textContent = currentInput;
        } else if (button.classList.contains('operator')) {
            operator = value;
            firstValue = currentInput;
            currentInput = '';
        } else if (button.id === 'equals') {
            if (operator && firstValue && currentInput) {
                let result = eval(`${firstValue}${operator}${currentInput}`);
                display.textContent = result;
                currentInput = result;
                shouldReset = true;
            }
        } else if (button.id === 'clear') {
            currentInput = '';
            firstValue = '';
            operator = '';
            display.textContent = '0';
        } else if (button.id === 'backspace') {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput || '0';
        } else if (button.id === 'decimal') {
            if (!currentInput.includes('.')) {
                currentInput += '.';
                display.textContent = currentInput;
            }
        } else if (button.id === 'percent') {
            if (currentInput) {
                currentInput = (parseFloat(currentInput) / 100).toString();
                display.textContent = currentInput;
            }
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