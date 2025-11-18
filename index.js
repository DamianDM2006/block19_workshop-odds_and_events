// - Numbers are moved into the correct category based on whether they are odd or even.
// - Functions are used to organize logic involving state changes.
// - The application is rerendered whenever state changes.
// - UI elements are organized into component functions.
// - Event listeners modify state. They do not directly modify the document.

// === STATE ===
  // --- [(number bank), (odd numbers), (even number)]

// === Provide Form ===
const getNumberForm = (fromInput) => {
  const $form = document.createElement("form");
  $form.innerHTML = `
   <form>
    <label>Add a Number to the Bank</label>
      <input
        type="number"
        maxlength="10"/>
    <button>Add Number</button>
      <input
        type="button"
        id="add-num"/>
    <button>Sort 1</button>
      <input
        type="button"
        id="sort1"/>
    <button>Sort All</button>
      <input
        type="button"
        id="sort-all"/>
  </form>
  `
  /* event listener */
  /* event.preventDefault() */

  return $form;
};

// === FUNCTION Add Number (toBank)===
const addNumber = (toBank) => {
/*  <button>Add Number</button>
      <input
        type="button"
        id="add-num"/>
 */};

// === Display Inputted Numbers ===
const displayNumbers = (fromWhere, toWhere) => {

};

// === FUNCTION Sort First Number (number bank)
const sortNumber = (fromBank) => {
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

};