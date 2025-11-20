// - Numbers are moved into the correct category based on whether they are odd or even.
// - Functions are used to organize logic involving state changes.
// - The application is rerendered whenever state changes.
// - UI elements are organized into component functions.
// - Event listeners modify state. They do not directly modify the document.

// === STATE ===
// --- [(number bank), (odd numbers), (even number)]
const bank = [];
console.log(`bank:`, bank);
const oddNums = [];
console.log(`oddNums:`, oddNums);
const evenNums = [];
console.log(`evenNums:`, evenNums);

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
console.log(bankForm);

// === FUNCTION Add Number (toBank)===
const addNumber = () => {
  const addButton = bankForm.querySelector(`button[name="add"]`);
  bankForm.addEventListener(`submit`, (event) => {
    if (event.submitter == addButton) {
      event.preventDefault();
      const $userNum = bankForm.querySelector(`#addNum`);
      const $userNumber = $userNum.value;
      const toBank = bank.push(Number($userNumber));
      bankForm.reset();
    }
  });

  return bankForm;
};

// === Display Inputted Numbers [bank] ===
const displayNumbers = (fromWhere, toWhere) => {};

// === FUNCTION Sort First Number (number bank)
const sortNumber = () => {
console.log(bank);
  const firstNum = bank.shift();
  console.log(firstNum);

};
sortNumber();

// === FUNCTION Sort All Numbers (number bank)
const sortAll = (fromBank) => {
  /* loop sortNumber() until bank is empty */
  /* <button>Sort All</button>
    <input
      type="button"
      id="sort-all"/> */
};

// === FUNCTION Odd or Even ===
const oddEven = (fromBank) => {
  /* if () */
  /* else */
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
