import Calculator from './calculator.js';

const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const equalBtn = document.querySelector('[data-equal]');
const clearBtn = document.querySelector('[data-clear]');
const floatBtn = document.querySelector('[data-float]');
const previousDisplay = document.querySelector('[data-display-previous]');
const currentDisplay = document.querySelector('[data-display-current]');

const calculator = new Calculator(previousDisplay, currentDisplay);

numberBtn.forEach(button => {
  button.addEventListener('click', () => {
    calculator.getValues(button.innerText);
    calculator.updateDisplay();
  });
});

operatorBtn.forEach(button => {
  button.addEventListener('click', () => {
    calculator.getOperator(button.innerText);
    calculator.updateDisplay();
  });
});

equalBtn.addEventListener('click', () => {
  calculator.equal();
  calculator.updateDisplay();
});

clearBtn.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

floatBtn.addEventListener('click', () => {
  calculator.getFloatValues();
  calculator.updateDisplay();
});
