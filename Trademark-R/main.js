const tmcountEl = document.getElementById("tm-count")

let idx=0;

updateNum()

function updateNum() {
    tmcountEl.innerText = idx 
    idx++
    if(idx < 2220){
        setTimeout(updateNum ,3)
    }
}