const counterEl = document.querySelector(".counter")


const barEl = document.querySelector(".loading-bar-front")


let idx =10;

updateNum()

function updateNum() {
    counterEl.innerText = idx + "%"

    barEl.style.width = idx + "%"
    
    idx++
    if(idx <=100){
        setTimeout(updateNum ,100)
    }


}

