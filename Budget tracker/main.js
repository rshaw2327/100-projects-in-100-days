const balAmount = document.querySelector(".bal-amount");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const liEl = document.querySelector("ul");
const descTransEl = document.querySelector(".des-trans");
const transAmount = document.querySelector(".amount");
const inputDescription = document.getElementById("description");
const inputAmount = document.getElementById("amount");
const btnEl = document.querySelector(".btn");
const li = document.querySelector("li");

let transactions = [];

btnEl.addEventListener("click", addTransaction);

function addTransaction() {
  inputDescVal = inputDescription.value.trim();
  inputAmountVal = parseFloat(inputAmount.value.trim());

  if (inputAmountVal > 0) {
    li.style.backgroundColor = "green";
  } else {
    li.style.backgroundColor = "red";
  }

  descTransEl.innerHTML = inputDescVal;
  transAmount.innerHTML = inputAmountVal;

  let transaction = {
    inputDescVal,
    inputAmountVal,
  };
  transactions.unshift(transaction);

  displayTransaction();
  updateBalance();
}

function displayTransaction() {
  let liHTML = "";
  transactions.forEach((transaction) => {
    liHTML += `<li><span class="des-trans">${transaction.inputDescVal}</span><span class="amount">${transaction.inputAmountVal}</span></li>`;
  });

  liEl.innerHTML = liHTML;
}
function updateBalance() {
  const balance = transactions.reduce((acc, t) => acc + t.inputAmountVal, 0);

  const income = transactions
    .filter((t) => t.inputAmountVal > 0)
    .reduce((acc, t) => acc + t.inputAmountVal, 0);
  console.log(income);

  const expenses = transactions
    .filter((t) => t.inputAmountVal < 0)
    .reduce((acc, t) => acc + t.inputAmountVal, 0);

  balAmount.textContent = balance.toFixed(2);
  incomeEl.textContent = income.toFixed(2);
  expenseEl.textContent = expenses.toFixed(2);
}

// const balAmount = document.querySelector(".bal-amount");
// const incomeEl = document.getElementById("income");
// const expenseEl = document.getElementById("expense");
// const liEl = document.querySelector("ul");
// const inputDescription = document.getElementById("description");
// const inputAmount = document.getElementById("amount");
// const btnEl = document.querySelector(".btn");

// let transactions = [];

// btnEl.addEventListener("click", addTransaction);

// function addTransaction() {
//     const desc = inputDescription.value.trim();
//     const amount = parseFloat(inputAmount.value.trim());

//     if (!desc || isNaN(amount)) {
//         alert("Please enter valid description and amount");
//         return;
//     }

//     const transaction = {
//         desc,
//         amount
//     };

//     transactions.unshift(transaction); // Add to beginning
//     displayTransaction();
//     updateBalance();
// }

// function displayTransaction() {
//     let liHTML = "";
//     transactions.forEach(item => {
//         liHTML += `<li>
//             <span class="des-trans">${+item.desc}</span>
//             <span class="amount">${item.amount}</span>
//         </li>`;
//     });
//     liEl.innerHTML = liHTML;
// }

// function updateBalance() {
//     const total = transactions.reduce((acc, t) => acc + t.amount, 0);
//     const income = transactions
//         .filter(t => t.amount > 0)
//         .reduce((acc, t) => acc + t.amount, 0);
//     const expenses = transactions
//         .filter(t => t.amount < 0)
//         .reduce((acc, t) => acc + t.amount, 0);

//     balAmount.textContent = `$${total.toFixed(2)}`;
//     incomeEl.textContent = `$${income.toFixed(2)}`;;
//     expenseEl.textContent =  `$${Math.abs(expenses).toFixed(2)}`;;
// }
