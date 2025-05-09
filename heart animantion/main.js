const bodyEl = document.querySelector("body")

bodyEl.addEventListener("mousemove", (event)=> {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    bodyEl.appendChild(spanEl);
    spanEl.style.left = Xpos + "px";
    spanEl.style.top = Ypos + "px";  
    
});

console.log("rich")