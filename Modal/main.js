const btnEL = document.querySelector(".btn")

const modalOverlayEl = document.querySelector(".modal-ovarlay")

const modalEl = document.querySelector(".modal")

const modalContentEl = document.querySelector(".modal-content")

btnEL.addEventListener("click" , ()=>{
    modalEl.classList.add("open");

});

modalContentEl.addEventListener("click", ()=> {
   console.log("clicked")
    modalEl.classList.remove("open")
})