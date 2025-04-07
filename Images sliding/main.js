
const imgEls = document.querySelectorAll(".img-container div")


imgEls.forEach(imgEl  => {
    imgEl.addEventListener("click", (e)=> {
        imgEls.forEach(imgEl2 => {
            imgEl2.classList.remove("active")
        }) 
        e.target.classList.add("active")
    })
});

// expWorldEl.addEventListener('click', ()=> {
//     expWorldEl.classList.add("exp-world:active");

//     expWorldEl.classList.remove("exp-world:active");
//     console.log(expWorldEl)

// })

// blueSkyEl.addEventListener('click', ()=> {
//     blueSkyEl.classList.add("blue-sky:active");

//     blueSkyEl.classList.remove("blue-sky:active");
//     console.log(expWorldEl)

//     expWorldEl.classList.remove("exp-world:active");
//     console.log(expWorldEl)

// })
