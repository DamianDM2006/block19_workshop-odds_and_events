// - Numbers are moved into the correct category based on whether they are odd or even.
// - Functions are used to organize logic involving state changes.
// - The application is rerendered whenever state changes.
// - UI elements are organized into component functions.
// - Event listeners modify state. They do not directly modify the document.

// === STATE ===
// --- [(number bank), (odd numbers), (even number)]
const bank = [];

const oddNums = [];

const evenNums = [];


// === FUNCTION Sort First Number (number bank)
const sortNumber = () => {
  const firstNum = bank.shift();
console.log(`firstNum`, firstNum);
  if ((firstNum % 2 === 1) || (firstNum % 2 === -1)) {
    const toOdd = oddNums.push(firstNum);
console.log(`toOdd`, toOdd);
  } else if ((firstNum % 2 === 0) && (firstNum !== 0)) {
    const toEven = evenNums.push(Number(firstNum));
console.log(`toEven`, toEven);
  }

  console.log(`bank Sort 1`, bank);
  render();
};

// === FUNCTION Sort All Numbers (number bank)
const sortAll = () => {
  for (let i = 0; i < bank.length; ) {
    sortNumber();
  }
  console.log(`bank ALL`, bank);
  render();
};


// === Provide Form to input numbers ===
const getNumberForm = () => {
  const $form = document.createElement("form");
  $form.id = `userIn`;
  $form.innerHTML = `
    <label for="addNum">Number to Add to the Bank</label>
      <input
        type="number"
        id="addNum"
        min="1"
        name="addNum"/>
      <button name="add">ADD</button>
      <button name="srtOne">Sort 1</button>
      <button name="srtAll">Sort All</button>
  `;

  return $form;
};
const bankForm = getNumberForm();



// === FUNCTION Add Number (toBank)===
const addNumber = () => {
  const addButton = bankForm.querySelector(`button[name="add"]`);
  const sort1Button = bankForm.querySelector(`button[name="srtOne"]`);
  const sortAllButton = bankForm.querySelector(`button[name="srtAll"]`);
  bankForm.addEventListener(`submit`, (event) => {
    const $userNum = bankForm.querySelector(`#addNum`);
    const $userNumber = $userNum.value;
    if (event.submitter === addButton) {
      event.preventDefault();
      const toBank = bank.push(Number($userNumber));
      console.log(`bank ADD`, bank);
      $userNum.value = ``;
    } else if (event.submitter === sort1Button) {
      event.preventDefault();
      sortNumber();
      $userNum.value = ``;
    } else if (event.submitter === sortAllButton) {
      event.preventDefault();
      sortAll();
      $userNum.value = ``;
    } else event.preventDefault();
      $userNum.value = ``;
  });
  return bankForm;
};



// === Display Inputted Numbers [bank] ===
const displayNumbers = () => {
  const display = document.createElement("section");
  display.innerHTML = `
    <h3>BANK</h3>
      <p>${bank}</p>
    <h3>ODD NUMBERS</h3>
      <p>${oddNums}</p>
    <h3>EVEN NUMBERS</h3>
      <p>${evenNums}</p>
  `;
  return display;
};


// === FUNCTION  Render "when STATE changes" ===
const render = () => {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h2>Odds & Evens</h2>
    <EnterNumber></EnterNumber>
    <displayNums></displayNums>
  `;
  $app.querySelector("EnterNumber").replaceWith(addNumber());
  $app.querySelector("displayNums").replaceWith(displayNumbers());
};
render();
