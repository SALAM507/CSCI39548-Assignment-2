// Get the display element
const display = document.getElementById('calculator-display');

// Variable to store the current display value
let currentValue = '0';

// Varaible that will store the result
let totalValue = 0;



// Stores inbetween values
let valueToCalculate = 0;

//Stores an identifier for the most recent operation
let recentOperation = 0;

let equalPressed = 0;

//function to perform factorials
function factorial(num) {
  if (num < 0) {
    // Factorial is not defined for negative numbers
    return "Error: Factorial is not defined for negative numbers";
  } else if (num === 0) {
    // Factorial of 0 is 1
    return 1;
  } else {
    // Calculate factorial recursively
    return num * factorial(num - 1);
  }
}

//function used to perform operations
function operation(lastButtionPress){
    if (lastButtionPress == 0){
      totalValue += parseFloat(currentValue);
    }else if (lastButtionPress == 1){
      totalValue += parseFloat(currentValue);
    }else if (lastButtionPress == 2){
      totalValue -= parseFloat(currentValue);
    } else if (lastButtionPress == 3){
      totalValue *= parseFloat(currentValue);
    } else if (lastButtionPress == 4){
      totalValue /= parseFloat(currentValue);
    } else if (lastButtionPress == 5){
      totalValue **= parseFloat(currentValue);
    } 
  }

// Get the number buttons
const numberButtons = document.querySelectorAll('.calculator button');

// Add click event listeners to the number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.textContent;
    
    // Check if current value is '0' and replace it with the typed number
    if (currentValue === '0') {
      currentValue = number;
    } else {
      currentValue += number;
    }
    
    display.textContent = currentValue;
  });
});

const clearButton = document.getElementById('allClearButton');

clearButton.addEventListener('click', () => {
    currentValue = '0';
    totalValue = 0;
    recentOperation = 0;
    valueToCalculate = 0;
    equalPressed = 0;
    display.textContent = currentValue;
  });
  
  const equalButton = document.getElementById('equalSign');

  equalButton.addEventListener('click', () => {
    operation(recentOperation); 
    currentValue = totalValue.toString();
    display.textContent = currentValue;
    totalValue = 0;
    recentOperation = 0;
    equalPressed = 1;
  });

  const percentButton = document.getElementById('percentSign');

  percentButton.addEventListener('click', () =>{
    valueToCalculate = parseFloat(currentValue) * 100;
    totalValue = valueToCalculate.toFixed(2);
    totalValue.toString();
    totalValue += '%';
    display.textContent = totalValue; 
  });

  const addButton = document.getElementById('additionButton');

  addButton.addEventListener('click', () => {
    operation(recentOperation);
    currentValue = '0'
    display.textContent = currentValue;
    recentOperation = 1;
  });

  const minusButton = document.getElementById('minusSign');

  minusButton.addEventListener('click', () => {
    operation(recentOperation);
    currentValue = '0'
    display.textContent = currentValue;
    recentOperation = 2;
  });

  const timesButton = document.getElementById('timesSign');

  timesButton.addEventListener('click', () => {
    operation(recentOperation);
    currentValue = '0'
    display.textContent = currentValue;
    recentOperation = 3;
  });

  const divisionButton = document.getElementById('divisionSign');

  divisionButton.addEventListener('click', () => {
    operation(recentOperation);
    currentValue = '0'
    display.textContent = currentValue;
    recentOperation = 4;
  });
  
  const factorialButton = document.getElementById('factorial');

  factorialButton.addEventListener('click', () => {
    valueToCalculate = factorial(parseFloat(currentValue));
    currentValue = valueToCalculate.toString();
    display.textContent = currentValue;
  });

  const naturalLogButton = document.getElementById('ln');

  naturalLogButton.addEventListener('click', () => {
    valueToCalculate = Math.log(parseFloat(currentValue));
    currentValue = valueToCalculate.toString();
    display.textContent = currentValue;
  });

  const LogButton = document.getElementById('log');

  LogButton.addEventListener('click', () => {
    valueToCalculate = Math.log10(parseFloat(currentValue));
    currentValue = valueToCalculate.toString();
    display.textContent = currentValue;
  });

  const powerButton = document.getElementById('power');

  powerButton.addEventListener('click', () => {
    operation(recentOperation);
    currentValue = '0'
    display.textContent = currentValue;
    recentOperation = 5;
  });

  const radicalButton = document.getElementById('radical');

  radicalButton.addEventListener('click', () => {
    valueToCalculate = Math.sqrt(parseFloat(currentValue));
    currentValue = valueToCalculate.toString();
    display.textContent = currentValue;
  });

  const sinButton = document.getElementById('sin');

  sinButton.addEventListener('click', () => {
    valueToCalculate = Math.sin(parseFloat(currentValue));
    currentValue = valueToCalculate.toString();
    display.textContent = currentValue;
  });

  const cosButton = document.getElementById('cos');

  cosButton.addEventListener('click', () => {
    valueToCalculate = Math.cos(parseFloat(currentValue));
    currentValue = valueToCalculate.toString();
    display.textContent = currentValue;
  });

  const tanButton = document.getElementById('tan');

  tanButton.addEventListener('click', () => {
    valueToCalculate = Math.tan(parseFloat(currentValue));
    currentValue = valueToCalculate.toString();
    display.textContent = currentValue;
  });