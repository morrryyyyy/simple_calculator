// Create basic operation functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const modulus = (a, b) => a % b;

// Operate function
const operate = (a, b, operator) => {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    case "%":
      return modulus(a, b);
    default:
      return null;
  }
};

// Display area
const displayArea = document.querySelector("#display");
const buttons = document.querySelectorAll(".button");

let currentInput = ""; // Make sure it's a string initially
let operand1 = null;
let operand2 = null;
let operator = null;

// Operand button logic
for (let button of buttons) {
  button.addEventListener("click", (e) => {
    // Check if the button clicked is an operand (number button)
    if (e.target.classList.contains("operand")) {
      currentInput += e.target.textContent; // Add the clicked button's value to currentInput
      displayArea.value = currentInput; // Update the display with the current input
    }

    // Operator button logic
    if (e.target.classList.contains("operator")) {
      if (operand1 === null) {
        operand1 = parseFloat(currentInput); // Store operand1
        operator = e.target.textContent; // Store the operator
        currentInput = ""; // Reset currentInput to enter operand2
      } else if (operand2 === null) {
        operand2 = parseFloat(currentInput); // Store operand2
        const result = operate(operand1, operand2, operator); // Perform the operation
        displayArea.value = result; // Display the result
        operand1 = result; // The result becomes operand1 for further calculations
        operand2 = null; // Reset operand2 for the next operand
        operator = e.target.textContent; // Store the new operator for the next calculation
        currentInput = ""; // Clear currentInput for the next operand
      } else {
        // If operand2 is set and operator is clicked, calculate result first
        operand1 = parseFloat(displayArea.value); // Update operand1 with current display value
        operator = e.target.textContent; // Update the operator
        operand2 = null; // Reset operand2 to wait for the next operand
        currentInput = ""; // Clear currentInput for the next input
      }
    }
  });
}

// Equals button logic
const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => {
  if (operand1 !== null && currentInput !== "") {
    operand2 = parseFloat(currentInput); // Save the second operand
    const result = operate(operand1, operand2, operator); // Perform the operation
    displayArea.value = result; // Display the result
    operand1 = result; // Store the result as operand1 for future calculations
    operand2 = null; // Reset operand2
    operator = null; // Reset operator
    currentInput = ""; // Reset input for next operation
  }
});

// Clear button logic
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  operand1 = null;
  operand2 = null;
  operator = null;
  currentInput = "";
  displayArea.value = "";
});
