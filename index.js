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
  $form.innerHTML = `
    <label for="addNum">Number to Add to the Bank</label>
      <input
        type="number"
        id="addNum"
        name="addNum"/>
      <button name="add">ADD</button>
      <button name="srtOne">Sort 1</button>
      <button name="srtAll">Sort All</button>
  `;
  return ($form);
};
const bankForm = getNumberForm();
console.log(bankForm);


// === FUNCTION Add Number (toBank)===
const addNumber = () => {
  bankForm.addEventListener("submit", (event) => {
    event.preventDefault()
  const $userNum = document.querySelector(`input`)

  const toBank = bank.push($userNum)




  });
console.log(`TEST`, $userNum);
 /*  return bank; */
};
/* addNumber(); */

// === Display Inputted Numbers ===
const displayNumbers = (fromWhere, toWhere) => {};

// === FUNCTION Sort First Number (number bank)
const sortNumber = () => {

  /*   <button>Sort 1</button>
      <input
        type="button"
        id="sort1"/> */
};

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
  $app.querySelector("EnterNumber").replaceWith(getNumberForm());
};
render();