const deleteIconEl = document.querySelector(".fa-trash-can")

const writingIconEl = document.querySelector(".fa-pen-to-square")

const buttonEl = document.querySelector(".btn")

deleteIconEl.addEventListener("click", ()=> {
    deleteIconEl.classList.remove("active")
})

buttonEl.addEventListener("click", ()=>{
    buttonEl.classList.add(".writing-pad.active")
    
})
