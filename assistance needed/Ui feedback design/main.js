const btnEl = document.querySelector(".btn")
const containerEl = document.querySelector(".container")

btnEl.addEventListener("click", ()=> {
    containerEl.style.display = 'none'
       var para = document.createElement("P");
var t = document.createTextNode("We'll use your feedback to improve our customer support");
para.appendChild(t);
document.body.appendChild(para)
})