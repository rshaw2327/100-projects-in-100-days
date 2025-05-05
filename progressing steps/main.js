let step = 1;

const nextBtnEl = document.querySelector(".next")

const prevBtnEl = document.querySelector(".prev")

const linebackEl = document.querySelector(".line-1-back")
let circleEls = document.querySelector(".circle");

nextBtnEl.addEventListener("click", ()=> {
  if(step < 4) {
    step++;
  }
  updateProgress();
})

prevBtnEl.addEventListener("click", ()=> {
  if(step > 1) {
    step--;

  }
  updateProgress();
})


function updateProgress() {
  let width = (step - 1) * 18;
  linebackEl.style.width = `${width}%`;
  manageCircles();
  manageNavBtns();

}

function manageCircles() {
  circleEls.forEach(circleEl => {
    circleEl.classList.remove("active");
  })
  
  for(let i = 0; i < step; i++) {
    circleEls[i].classList.add("active");
  }
}

function manageNavBtns() {
  if(step == 1) {
    prevBtnEl.setAttribute("disabled", true);
  } else {
    prevBtnEl.removeAttribute("disabled");
  }

  if(step == 4) {
    nextBtnEl.setAttribute("disabled",true);
   } else {
    nextBtnEl.removeAttribute("disabled");
   }
}