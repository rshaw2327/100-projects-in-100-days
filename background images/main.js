const slideEls = document.querySelectorAll(".slide");
const contEl = document.querySelector(".cont");

const prevEl = document.querySelector(".prev");
const nextEl = document.querySelector(".next");

let index = 1;
slideEls[index - 1].classList.add("active");
contEl.style.backgroundImage = document.querySelector(".slide.active").style.backgroundImage;

nextEl.addEventListener("click", function() {
    if(index == slideEls.length) {
        index = 1;
    } else {
        index++;
    }
    changeImg();
})
prevEl.addEventListener("click", function() {
    if(index == 1) {
        index = slideEls.length;
    } else {
        index--;
    }
    changeImg();
})

function changeImg() {
    slideEls.forEach(slideEl => {
        slideEl.classList.remove("active");
    })

    slideEls[index - 1].classList.add("active");
    contEl.style.backgroundImage = document.querySelector(".slide.active").style.backgroundImage;

    contEl.style.animationName = "zoomin";
    setTimeout(function() {
        contEl.style.animationName = "none";
    }, 600)
}
