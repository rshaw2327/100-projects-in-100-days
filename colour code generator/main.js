const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colourContainerEl = document.createElement("div");
    colourContainerEl.classList.add("colour-conatiner");
    containerEl.appendChild(colourContainerEl);
    
}

function randomColour() {
    const chars= "023456789abcdef";
    const colourCodeLength = 6;
}