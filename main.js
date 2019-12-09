document.addEventListener('DOMContentLoaded', () => {
  const oneBtn = document.querySelector('#one');
  const twoBtn = document.querySelector('#two');
  const threeBtn = document.querySelector('#three');
  const fourBtn = document.querySelector('#four');
  const fiveBtn = document.querySelector('#five');
  const sixBtn = document.querySelector('#six');
  const sevenBtn = document.querySelector('#seven');
  const eightBtn = document.querySelector('#eight');
  const nineBtn = document.querySelector('#nine');
  const nullBtn = document.querySelector('#null');
  const resetBtn = document.querySelector('#reset');
  const floatBtn = document.querySelector('#float');

  const plusBtn = document.querySelector('#plus');
  const minusBtn = document.querySelector('#minus');
  const divideBtn = document.querySelector('#divide');
  const timesBtn = document.querySelector('#times');

  const equalBtn = document.querySelector('#equal');
  const output = document.querySelector('#output');

  let result = '0';
  output.innerHTML = result;

  function getValues(n) {
    if (result === '0') result = '';
    result += `${n}`;
    output.innerHTML = result;
  }

  function getOperator(i) {
    result += `${i}`;
    output.innerHTML = result;
  }

  function reset() {
    result = '0';
    output.innerHTML = result;
  }

  function equal() {
    try {
      result = eval(result);
      if (result % 1 !== 0) result = +result.toFixed(3);
      output.innerHTML = result;
    } catch (err) {
      result = '0';
      output.innerHTML = 'Invalid expression';
    }
  }

  oneBtn.addEventListener('click', () => getValues(1));
  twoBtn.addEventListener('click', () => getValues(2));
  threeBtn.addEventListener('click', () => getValues(3));
  fourBtn.addEventListener('click', () => getValues(4));
  fiveBtn.addEventListener('click', () => getValues(5));
  sixBtn.addEventListener('click', () => getValues(6));
  sevenBtn.addEventListener('click', () => getValues(7));
  eightBtn.addEventListener('click', () => getValues(8));
  nineBtn.addEventListener('click', () => getValues(9));
  nullBtn.addEventListener('click', () => getValues(0));
  resetBtn.addEventListener('click', reset);

  floatBtn.addEventListener('click', () => getOperator('.'));
  plusBtn.addEventListener('click', () => getOperator('+'));
  minusBtn.addEventListener('click', () => getOperator('-'));
  divideBtn.addEventListener('click', () => getOperator('/'));
  timesBtn.addEventListener('click', () => getOperator('*'));

  equalBtn.addEventListener('click', equal);
});
