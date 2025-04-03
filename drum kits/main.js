const kits = ["crash","kick", "snare","tom"]

const containerEl = document.querySelector(".container")

kits.forEach((kit)=> {
    const buttonEl = document.createElement("button");
    containerEl.appendChild(buttonEl);
    buttonEl.classList.add("button");
    buttonEl.innerText = kit;
    buttonEl.style.backgroundImage = "url(images/" + kit + ".png)"
    containerEl.appendChild(buttonEl);
    const audioEl = document.createElement("audio");
    audioEl.src = "sounds/" + kit + ".mp3"
    containerEl.appendChild(audioEl);
    buttonEl.addEventListener("click", ()=> 
    audioEl.play());
    

});

window.addEventListener("keydowm", (event)=> {
    if (event.key === kit.slice(0,1)) {
        audioEl.play();
        buttonEl.style.transform = "scale(.9)";
        console.log()
     
    }
})