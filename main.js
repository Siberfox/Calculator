let result = '';
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

  const plusBtn = document.querySelector('#plus');
  const minusBtn = document.querySelector('#minus');
  const divideBtn = document.querySelector('#divide');
  const timesBtn = document.querySelector('#times');

  const equalBtn = document.querySelector('#equal');
  const output = document.querySelector('#output');

  oneBtn.addEventListener('click', () => (output.innerHTML = result += `1`));
  twoBtn.addEventListener('click', () => (output.innerHTML = result += `2`));
  threeBtn.addEventListener('click', () => (output.innerHTML = result += `3`));
  fourBtn.addEventListener('click', () => (output.innerHTML = result += `4`));
  fiveBtn.addEventListener('click', () => (output.innerHTML = result += `5`));
  sixBtn.addEventListener('click', () => (output.innerHTML = result += `6`));
  sevenBtn.addEventListener('click', () => (output.innerHTML = result += `7`));
  eightBtn.addEventListener('click', () => (output.innerHTML = result += `8`));
  nineBtn.addEventListener('click', () => (output.innerHTML = result += `9`));
  nullBtn.addEventListener('click', () => (output.innerHTML = result += `0`));
  resetBtn.addEventListener('click', () => (output.innerHTML = result = ''));

  plusBtn.addEventListener('click', () => (output.innerHTML = result += `+`));
  minusBtn.addEventListener('click', () => (output.innerHTML = result += `-`));
  divideBtn.addEventListener('click', () => (output.innerHTML = result += `/`));
  timesBtn.addEventListener('click', () => (output.innerHTML = result += `*`));

  equalBtn.addEventListener('click', () => {
    result === '' ? (output.innerHTML = result += `0`) : (output.innerHTML = result = eval(result));
  });
});
