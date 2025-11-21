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
    if (event.submitter == addButton) {
      event.preventDefault();
      const $userNum = bankForm.querySelector(`#addNum`);
      const $userNumber = $userNum.value;
      const toBank = bank.push(Number($userNumber));
      bankForm.reset();
    } else if (event.submitter === sort1Button) {
      event.preventDefault();
      sortNumber();
      bankForm.reset();
    } else {
      if (event.submitter === sortAllButton) {
        event.preventDefault();
        sortAll();
        bankForm.reset();
      }
    }
  });
  return bankForm;
};

// === Display Inputted Numbers [bank] ===
const displayNumbers = () => {

};

// === FUNCTION Sort First Number (number bank)
const sortNumber = () => {
  const firstNum = bank.shift();
  if (firstNum % 2 === 1 || firstNum % 2 === -1) {
    const toOdd = oddNums.push(firstNum);
  } else {
    if (firstNum % 2 === 0) {
      const toEven = evenNums.push(Number(firstNum));
    }
  }

  render();
};

// === FUNCTION Sort All Numbers (number bank)
const sortAll = () => {
  bank.forEach((num) => {
    sortNumber();
  });
console.log(`bank`, bank);
console.log(`oddNums:`, oddNums);
console.log(`evenNums:`, evenNums);
};

// === FUNCTION  Render "when STATE changes" ===
const render = () => {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h2>Odds & Evens</h2>
    <EnterNumber></EnterNumber>
  `;
  $app.querySelector("EnterNumber").replaceWith(addNumber());
};
render();
