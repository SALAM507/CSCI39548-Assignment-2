// Get the display element
const display = document.getElementById('calculator-display');

// Variable to store the current display value
let currentValue = '0';

// Varaible that will store the result
let totalValue = 0;

// Stores inbetween values
let valueToCalculate = 0;

//Stores an identifier for the most recent operation
let recentOperation = '0';

//function used to perform operations
function operation(lastButtionPress){
    if (lastButtionPress = '0'){
        totalValue += parseFloat(currentValue);
    } else if (lastButtionPress = 'add'){
        totalValue += parseFloat(currentValue);
    }else if (lastButtionPress = 'minus'){
        totalValue -= parseFloat(currentValue);
    } else if (lastButtionPress = 'times'){
        totalValue *= parseFloat(currentValue);
    } else if (lastButtionPress = 'divide'){
        totalValue /= parseFloat(currentValue);
    }   
   
        
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
    recentOperation = '0';
    valueToCalculate = 0;
    display.textContent = currentValue;
  });
  
  const equalButton = document.getElementById('equalSign');

  equalButton.addEventListener('click', () => {
    operation(recentOperation);
    //totalValue += parseFloat(currentValue); 
    currentValue = totalValue.toString();
    display.textContent =  currentValue;
    recentOperation = '0';
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
    //totalValue += parseFloat(currentValue);
    currentValue = '0'
    display.textContent = currentValue;
    recentOperation = 'add';
  });

  const minusButton = document.getElementById('minusSign');

  minusButton.addEventListener('click', () => {
    operation(recentOperation);
    currentValue = '0'
    display.textContent = currentValue;
    recentOperation = 'minus';
  });

  const timesButton = document.getElementById('timesSign');

  timesButton.addEventListener('click', () => {
    operation(recentOperation);
    currentValue = '0'
    display.textContent = currentValue;
    recentOperation = 'times';
  });

  const divisionButton = document.getElementById('divisionSign');

  divisionButton.addEventListener('click', () => {
    operation(recentOperation);
    currentValue = '0'
    display.textContent = currentValue;
    recentOperation = 'divide';
  });
  