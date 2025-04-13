const heightEl = document.querySelector(".height")
const weightEl = document.querySelector(".weight")
const btnEl = document.querySelector(".btn")
const bmiEl = document.querySelector(".bmi")
const weightConditionEl = document.getElementById("weight-condition" )




function calculateBMI() {
  heightElValue = heightEl.value /100
  weightElValue = weightEl.value

 bmiElValue= weightElValue / (heightElValue * heightElValue);
 
 bmiEl.value = bmiElValue;

 if ( bmiElValue < 18.5) {
    weightConditionEl.innerText = "Under weight"
}else if (bmiElValue >= 18.5 && bmiElValue <= 24.9) {
    weightConditionEl.innerText = "Normal weight"
}else if (bmiElValue >=25 && bmiElValue <=29.9){
    weightConditionEl.innerText = "Overweight"
}else if (bmiElValue >=30 ) {
     weightConditionEl.innerText = "Obese"

}



    
}

btnEl.addEventListener("click", calculateBMI)



