class Calculator {
  constructor(prevDisplay, currDisplay) {
    this.prevDisplay = prevDisplay;
    this.currDisplay = currDisplay;
    this.valueArray = [];
  }

  getValues(number) {
    if (this.currDisplay.innerText === '0') {
      this.currDisplay.innerText = number;
    } else {
      this.currDisplay.innerText += number;
    }

    if (this.currDisplay.innerText.length > 7) {
      this.currDisplay.style.fontSize = '40px';
    }
    if (this.currDisplay.innerText.length > 11) {
      this.currDisplay.style.fontSize = '30px';
    }
  }

  getOperator(operator) {
    // if (this.valueArray.length === 2) {
    //   this.valueArray[0] =
    // }
    this.valueArray.push(this.currDisplay.innerText, operator);
    console.log(this.valueArray);
    this.prevDisplay.innerText = this.valueArray.join(' ');
    this.currDisplay.style.fontSize = '60px';
    this.currDisplay.innerText = '';
  }

  equal() {
    const prev = +this.valueArray[0];
    let curr = +this.currDisplay.innerText;
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
    this.valueArray.length = 0;
    this.prevDisplay.innerText = '';
  }

  clear() {
    this.prevDisplay.innerText = '';
    this.currDisplay.innerText = '0';
    this.currDisplay.style.fontSize = '60px';
  }
}

const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const equalBtn = document.querySelector('[data-equal]');
const clearBtn = document.querySelector('[data-clear]');
const previousDisplay = document.querySelector('[data-display-previous]');
const currentDisplay = document.querySelector('[data-display-current]');

const calculator = new Calculator(previousDisplay, currentDisplay);

numberBtn.forEach(button => {
  button.addEventListener('click', () => {
    calculator.getValues(button.innerText);
  });
});

operatorBtn.forEach(button => {
  button.addEventListener('click', () => {
    calculator.getOperator(button.innerText);
  });
});

equalBtn.addEventListener('click', () => {
  calculator.equal();
});

clearBtn.addEventListener('click', () => {
  calculator.clear();
});
