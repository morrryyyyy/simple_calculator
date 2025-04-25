//create basic operation functions
//add
const add = (a, b) => a + b;
//subtract
const subtract = (a, b) => a - b;
//divide
const divide = (a, b) => a / b;
//mutliply
const multiply = (a, b) => a * b;
//modulus
const modulus = (a, b) => a % b;

//operate function
const operate = (operator, a, b) => {
  switch (operator) {
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
    case "divide":
      return divide(a, b);
    case "modulus":
      return modulus(a, b);
    default:
      return null;
  }
};

