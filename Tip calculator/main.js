const billAmountEl = document.querySelector(".bill-amount")
const tipPerEl = document.querySelector(".tip-per")
const btnEl = document.querySelector(".btn")
const totalEl = document.querySelector(".total")


function calculateTotal(){
    const billAmountValue = billAmountEl.value;
    const tipPerValue = tipPerEl.value;

    const totalTip = billAmountValue * tipPerValue / 100;
    console.log(totalTip)

    const Total = Number(billAmountValue) + Number(totalTip)
    console.log(Total)

    totalEl.innerText = Total

     

  
}


btnEl.addEventListener("click", calculateTotal);

