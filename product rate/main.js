const productCostEl = document.querySelector(".product-cost");
const discountrateEl = document.querySelector(".discount-rate");
const discountInRsEL = document.querySelector(".discount-in-rs");
const finalCostEL = document.querySelector(".final-cost")
const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("dis-percnt")

function calculatediscount() {
  let productCostValue = productCostEl.value;

  let discountpercentage=inputEl.value;

  

 

  let discountInRsValue = (productCostValue * discountpercentage) / 100;
 
  discountInRsEL.innerText = discountInRsValue;

  finalCostEL.innerText = productCostValue - discountInRsValue;
}


btnEl.addEventListener("click", calculatediscount);


