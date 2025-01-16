// Define initial array of 
let numArr = [];

const form = document.querySelector('form');
form.addEventListener('submit', addNumber);

// Add the submitted number into 'numArr', clear the form, and then rerender.
function addNumber(event) {
  event.preventDefault();

  const num = Number(event.target.number.value);
  numArr.push(num);
  // console.log(numArr);

  // Reset textbox to empty after submission
  event.target.number.value = "";

  // Re render after submission
  render();
}

// Render numbers to the numbers bank
function renderNumbersToNumbersBank() {
  const numbersElements = numArr.map((number) => {
    const numbersElement = document.createElement('span');
    numbersElement.textContent = number;
    numbersElement.classList = 'numbers';

    return numbersElement;
  })
  const numbersBank = document.querySelector('#numberBank output');
  numbersBank.replaceChildren(...numbersElements);
}

// Render numbers to the odd section
function renderNumbersToOddSection() {

}

// Render numbers to the even bank
function renderNumbersToEvenSection() {
  
}

function render() {
  renderNumbersToNumbersBank();
  renderNumbersToOddSection();
  renderNumbersToEvenSection();
}