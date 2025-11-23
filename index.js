
// === STATE ===
const bank = [];
const oddNums = [];
const evenNums = [];

// === FUNCTION Sort First Number (number bank)
const sortNumber = () => {
  const firstNum = bank.shift();
  if (firstNum % 2 === 1 || firstNum % 2 === -1) {
    const toOdd = oddNums.push(firstNum);
  } else if (firstNum % 2 === 0 && firstNum !== 0) {
    const toEven = evenNums.push(Number(firstNum));
  }
  console.log(`bank Sort 1`, bank);
};

// === FUNCTION Sort All Numbers (number bank)
const sortAll = () => {
  for (let i = 0; i < bank.length; ) {
    sortNumber();
  }
  console.log(`bank ALL`, bank);
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

const addButton = bankForm.querySelector(`button[name="add"]`);
const sort1Button = bankForm.querySelector(`button[name="srtOne"]`);
const sortAllButton = bankForm.querySelector(`button[name="srtAll"]`);

bankForm.addEventListener(`submit`, (event) => {
  const $userNum = bankForm.querySelector(`#addNum`);
  const userNumber = Number($userNum.value);
  if (event.submitter === addButton) {
    event.preventDefault();
    bank.push(Number(userNumber));
    console.log(`bank ADD`, bank);
  } else if (event.submitter === sort1Button) {
    event.preventDefault();
    sortNumber();
  } else if (event.submitter === sortAllButton) {
    event.preventDefault();
    sortAll();
  }
  
  render();
  $userNum.value = ``;
  bankForm.focus();


});

const addNumber = () => {
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
