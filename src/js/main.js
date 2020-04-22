class Calculator {
  constructor(prevDisplay, currDisplay) {
    this.prevDisplay = prevDisplay;
    this.currDisplay = currDisplay;
    this.valueArray = [];
  }

  getValues(number) {
    if (this.currDisplay.innerText === '0' || this.currDisplay.innerText === 'Invalid expression') {
      this.currDisplay.innerText = number;
    } else {
      this.currDisplay.innerText += number;
    }
  }

  getFloatValues() {
    if (this.currDisplay.innerText.includes('.')) {
      return;
    }
    this.currDisplay.innerText += '.';
  }

  getOperator(operator) {
    if (this.currDisplay.innerText === 'Invalid expression') {
      this.currDisplay.innerText = '0';
    }
    if (this.valueArray.length === 2 && this.currDisplay.innerText) {
      this.equal();
    }
    this.valueArray.push(this.currDisplay.innerText, operator);
    this.prevDisplay.innerText = this.valueArray.join(' ');
    this.currDisplay.innerText = '';
  }

  equal() {
    const prev = parseFloat(this.valueArray[0]);
    const curr = parseFloat(this.currDisplay.innerText);
    switch (this.valueArray[1]) {
      case '+':
        this.currDisplay.innerText = prev + curr;
        break;
      case '-':
        this.currDisplay.innerText = prev - curr;
        break;
      case 'x':
        this.currDisplay.innerText = prev * curr;
        break;
      case '÷':
        this.currDisplay.innerText = prev / curr;
        break;
      default:
    }
    if (this.valueArray.length > 2 || !isFinite(this.currDisplay.innerText)) {
      this.currDisplay.innerText = 'Invalid expression';
    } else if (parseFloat(this.currDisplay.innerText) % 1 !== 0) {
      this.currDisplay.innerText = parseFloat(this.currDisplay.innerText).toFixed(3);
    }
    this.valueArray.length = 0;
    this.prevDisplay.innerText = '';
  }

  clear() {
    this.prevDisplay.innerText = '';
    this.currDisplay.innerText = '0';
    this.valueArray.length = 0;
  }

  updateDisplay() {
    this.currDisplay.style.fontSize = '60px';
    if (this.currDisplay.innerText.length > 7) {
      this.currDisplay.style.fontSize = '40px';
    }
    if (this.currDisplay.innerText.length > 11) {
      this.currDisplay.style.fontSize = '30px';
    }
  }
}

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
