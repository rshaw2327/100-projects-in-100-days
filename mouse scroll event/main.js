const containerEl = document.querySelector(".container");

window.addEventListener("mousemove", (event)=> {
    containerEl.innerHTML = `
    <div class="container">
        <div class="mouse-event">
            ${event.clientX}
            <h2>Mouse X postion</h4>
        </div>
        <div class="mouse-event">
            ${event.clientY}
            <h2>Mouse Y postion</h4>
        </div>`
})