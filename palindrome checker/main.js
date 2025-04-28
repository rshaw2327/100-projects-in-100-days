const inputTextEl = document.querySelector(".text");

const inputNumberEl = document.querySelector(".number");

const btnEl = document.querySelector("button");

// function numberChecker(){
// let num=inputNumberEl.value
// let reverse=0;

// while(num!=0){
//     ld=num%10
//     reverse=reverse*10+ld
//     num=parseInt(num/10)

// }console.log(reverse)

// }

btnEl.addEventListener("click", function textChecker() {
  let str = inputTextEl.value;
  let reverse = "";
  for (let i = str.length - 1; i > -1; i--) {
    reverse = reverse + str[i];
  }
  if (str == reverse) {
    alert("P A L I N D R O M E");
  } else {
    alert("NOT A PALINDROME");
  }
});
