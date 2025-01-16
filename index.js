// Define initial state for number bank, odd, even
const state = {
  numberBank: [],
  odd: [],
  even: [],
}

const form = document.querySelector('form');
form.addEventListener('submit', addNumber);

// Add the submitted number into 'state.numberBank', clear the form, and then rerender.
function addNumber(event) {
  event.preventDefault();

  const num = Number(event.target.number.value);
  state.numberBank.push(num);
  // console.log(state.numberBank);

  // Reset textbox to empty after submission
  event.target.number.value = "";

  // Re render after submission
  render();
}

// Sort 1 Fuctionality - Sort first number into odd or even section
const buttonSortOne = document.querySelector('#sortOne');
buttonSortOne.addEventListener('click', () => {
  let firstNumber = state.numberBank.shift();
  if (firstNumber % 2 === 0) {
    state.even.push(firstNumber);
  } else {
    state.odd.push(firstNumber);
  }
  // Re render once number is sorted
  render();
})

// Render numbers to the numbers bank
function renderNumbersToNumbersBank() {
  const numbersElements = state.numberBank.map((number) => {
    const numbersElement = document.createElement('span');
    numbersElement.textContent = number;
    return numbersElement;
  })
  const numbersBank = document.querySelector('#numberBank output');
  numbersBank.replaceChildren(...numbersElements);
}

// Render numbers to the odd section
function renderNumbersToOddSection() {
  const oddElements = state.odd.map((number) => {
    const oddElement = document.createElement('span');
    oddElement.textContent = number;
    return oddElement;
  })
  const oddNumbers = document.querySelector('#odds output');
  oddNumbers.replaceChildren(...oddElements);
}

// Render numbers to the even bank
function renderNumbersToEvenSection() {
  const evenElements = state.even.map((number) => {
    const evenElement = document.createElement('span');
    evenElement.textContent = number;
    return evenElement;
  })
  const evenNumbers = document.querySelector('#evens output');
  evenNumbers.replaceChildren(...evenElements);
}

// Render function to update DOM for number bank array, odd array, and even array
function render() {
  renderNumbersToNumbersBank();
  renderNumbersToOddSection();
  renderNumbersToEvenSection();
}