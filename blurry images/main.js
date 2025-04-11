const spanEL = document.querySelector("span")

const backgroundEl = document.querySelector("body")


let idx =0;

updateNum()

function updateNum() {
    spanEL.innerText = `${idx}%`;
    let x = 100 - idx;
    backgroundEl.style.backdropFilter = `blur(${x}px)`;
 

    
    idx++
    if(idx <=100){
        setTimeout(updateNum ,40)
    }


}
